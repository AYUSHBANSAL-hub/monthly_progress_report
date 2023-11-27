export function StudentDataProcessor() {
  const splitValue = (value) => {
    return value.split("|").map((num) => parseInt(num, 10));
  };

  const calculateAverages = (students) => {
    let groups = {};

    // Grouping by background and current job status
    students.forEach((student) => {
      if (student.background && student.current_job_status) {
        // Check if these properties exist
        const key = student.background + "_" + student.current_job_status;
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(student);
      }
    });

    // Calculating averages
    let averages = [];
    for (let group in groups) {
      if (groups[group].length > 0) {
        // Check if group has elements
        let averageObj = {
          background: groups[group][0].background,
          current_job_status: groups[group][0].current_job_status,
        };
        let counts = {};

        groups[group].forEach((student) => {
          Object.keys(student).forEach((key) => {
            if (
              ![
                "background",
                "current_job_status",
                "user_email",
                "course_title",
                "Feedback",
                "Roadmap",
              ].includes(key) &&
              student[key] !== undefined
            ) {
              if (!averageObj[key]) averageObj[key] = [0, 0]; // [sum, count]

              let values = splitValue(student[key].toString());
              values.forEach((value, index) => {
                if (!isNaN(value)) {
                  averageObj[key][index] += value;
                  counts[key] = counts[key] || [0, 0];
                  counts[key][index]++;
                }
              });
            }
          });
        });

        // Finalize averages
        Object.keys(averageObj).forEach((key) => {
          if (Array.isArray(averageObj[key]) && Array.isArray(counts[key])) {
            averageObj[key] = averageObj[key][0] / counts[key][0];
          }
        });

        averages.push(averageObj);
      }
    }

    localStorage.setItem("averages", JSON.stringify(averages, null, 2));
    return averages;
  };

  const data = JSON.parse(localStorage.getItem("alldata"));
  calculateAverages(data);
}
