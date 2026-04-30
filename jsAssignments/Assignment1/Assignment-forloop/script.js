console.log("hello");

// 1.Print numbers from 1 to 5 using a for loop.
for(let i=1 ; i<=5 ; i++)
{
    console.log(i);
}
// 2.Print numbers from 1 to 10 using a for loop.
for(let i=1 ; i<=10 ; i++)
{
    console.log(i);
}
// 3.Print numbers from 10 to 1 (reverse counting). 
for(let i=10 ; i>=1 ; i--)
{
    console.log(i);
}

// 4.Print even numbers from 2 to 10. 
for(let i=2 ; i<=10 ; i+=2)
{
    if(i%2==0)
    {
    console.log(i);
    }
}
// 5.Print odd numbers from 1 to 9. 
for(let i=1 ; i<=9 ; i+=2)
{
     if(i%2!=0)
    {
    console.log(i);
    }
}
// 6.Print the table of 15 up to 10 steps. 
for(let i=1 ; i<=10 ; i++)
{
    console.log(15 + "*" + i + "=" +(15*i));
}
// 7.Print numbers from 1 to 20 with increment of 2. 
for(let i=1 ; i<=20 ; i+=2)
{
    console.log(i);
}
// 8.Print numbers from 5 to 50 with increment of 5. 
for(let i=5 ; i<=50 ; i+=5)
{
    console.log(i);
}
// 9.Create a loop and print the square of numbers
// from 1 to 10.

for(let i=1 ; i<=10 ; i++)
{
    console.log(i + "*" + i + "=" + (i*i));
}
// 10. Print numbers from 1 to 10 that are divisible
// by 3. 

for(let i=1 ; i<=10 ; i++)
{
    if(i%3==0)
    {
        console.log(i);
    }
}


// while loop questions

// 1.Write a program to print numbers from 1 to 5
// using a while loop.
let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}
// 2.Write a program to print numbers from 5 to 1
// using a while loop.
let j=5;
while(j>=1)
{
    console.log(j);
    j--;
}
// 3.Write a program to print numbers starting
// from 2 and keep adding 2 while the number
// becomes less than 11
let k=2;
while(k<=10)
{
    console.log(k);
    k+=2;
}
// 4.Write a program to calculate the sum of
// numbers from 10 to 5 using a while loop.

let sum = 0;
let l=10;
while(l>=5)
{
    sum = sum+l;
    l--;

}
console.log(sum);
