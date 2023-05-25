/*
        *Variable Manipulation
        */

        // Arithmetic manipulation
        let num1 = 10;
        let num2 = 5;
        let sum = num1 + num2;
        let difference = num1 - num2;
        let product = num1 * num2;
        let quotient = num1 / num2;
        document.write("Sum: " + sum + "<br>");
        document.write("Difference: " + difference + "<br>");
        document.write("Product: " + product + "<br>");
        document.write("Quotient: " + quotient + "<br>");
        document.write("<br>");



        // String manipulation
        let name = "Alice";
        let greeting = "Hello, " + name; //concatenation 
        let length = name.length;
        document.write("Initial name: " + name + "<br>");
        document.write("Greet: " + greeting + "<br>");
        document.write("Name character length: " + length + "<br>");
        document.write("<br>");


        // Boolean/logical manipulation
        let isRaining = true;
        let isSunny = false;
        let isBoth = isRaining && isSunny;
        let isEither = isRaining || isSunny;
        let isNotRaining = !isRaining;
        document.write("Variable 1: " + isRaining + "<br>");
        document.write("Variable 2: " + isSunny + "<br>");
        document.write("AND operator: " + isBoth + "<br>");
        document.write("OR operator: " + isEither + "<br>");
        document.write("Negation : " + isNotRaining + "<br>");
        document.write("<br>");



        /*
        Control Flow and Conditional Statements
        */

        // If else statement
        let age = 18;
        document.write("Your age is: " + age + "<br>");

        if (age >= 18) {
            document.write("You are eligible to vote." + "<br>");
        } else {
            document.write("You are not eligible to vote yet." + "<br>");
        }

        //Switch statement
        let dayOfWeek = 5;
        let dayName;

        switch (dayOfWeek) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            default:
                dayName = "Invalid day";
        }

        document.write("Today is " + dayName + "<br>");

        //Ternary operator
        let isMember = true;
        let discount = isMember ? 10 : 0;

        document.write("Discount: " + discount + "%" + "<br>");

        /*
        Loops and Iteration:
        */

        //For loop
        for (let i = 0; i < 5; i++) {
            document.write("For loop count:" + i + "<br>");
        }

        let count = 0;

        //While loop
        while (count < 5) {
            document.write("While loop count:" + count + "<br>");
            count++;
        }

        let num = 1;

        //Do-while loop
        do {
            document.write("Dpwhile loop count:" + num + "<br>");
            num++;
        } while (num <= 5);
