
        function calculateResults() {
            const subject1 = parseFloat(document.getElementById('subject1').value);
            const subject2 = parseFloat(document.getElementById('subject2').value);
            const subject3 = parseFloat(document.getElementById('subject3').value);
            const subject4 = parseFloat(document.getElementById('subject4').value);
            const subject5 = parseFloat(document.getElementById('subject5').value);

            if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
                alert("Please enter valid marks for all subjects.");
                return;
            }

            const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
            const percentage = (totalMarks / 500) * 100;
            let grade = '';

            if (percentage >= 90) {
                grade = 'A';
            } else if (percentage >= 80) {
                grade = 'B';
            } else if (percentage >= 70) {
                grade = 'C';
            } else if (percentage >= 60) {
                grade = 'D';
            } else {
                grade = 'F';
            }

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p>Total Marks: ${totalMarks}</p>
                <p>Percentage: ${percentage.toFixed(2)}%</p>
                <p>Grade: ${grade}</p>
            `;
        }
    