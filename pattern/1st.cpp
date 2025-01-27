// #include <iostream>
// using namespace std;

// * basic structure

// int main(){
//     for(int i=0; i<5; i++){
//         for(int j=0; j<4; j++){
//             cout<<"*"<<" ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }
// * character pattern
// int main(){
//     for(int i=0; i<4; i++){
//         char ch = 'A';
//         for(int j=0; j<4; j++){
//             cout<<ch<<" ";
//             ch++;
//         }
//         cout<<endl;
//     }
// }

// * square pattern

// int main()
// {
//     int n = 3;
//     int num = 1;
//     for (int i = 0; i < n; i++)
//     {
//         // * num=1 don't do this in loop because it will reset the value of num to 1 in every iteration of i loop so it will print 1 in every row of the square pattern
//         for (int j = 0; j < n; j++)
//         {
//             cout << num << " ";
//             num++;
//         }
//         cout << endl;
//     }
// }

// * square pattern for character

// int main()
// {
//     int n = 3;
//     char ch = 'A';
//     for (int i = 0; i < n; i++)
//     {

//         for (int j = 0; j < n; j++)
//         {
//             cout << ch << " ";
//             ch++;
//         }
//         cout << endl;
//     }
// }

// * triangle pattern

// int main()
// {
//     int n = 5;
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j <= i; j++)
//         {
//             cout << "* ";
//         }
//         cout << endl;
//     }
// }

// * triangle pattern for character

// int main()
// {
//     int n = 5;
//     char ch = 'A';
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j <= i; j++)
//         {
//             cout << ch << " ";
//             ch++;
//         }
//         cout << endl;
//     }
// }

// int main()
// {
//     int n = 5;
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j <= i; j++)
//         {
//             cout << i << " ";
//         }
//         cout << endl;
//     }
// }

// int main()
// {
//     int n = 5;
//     char ch = 'A';
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j < i + 1; j++)
//         {
//             cout << ch << " ";
//         }
//         ch++;
//         cout << endl;
//     }
// }

// int main()
// {
//     for (int i = 0; i < 5; i++)
//     {
//         for (int j = 0; j <= i; j++)
//         {
//             cout << j << " ";
//         }
//         cout << endl;
//     }
// }

// * Write a code to reverse a number

#include <iostream>
using namespace std;

// int main(){
//     int n;
//     cin>>n;
//     int reverse = 0;
//     while(n>0){
//         int lastdigit = n%10;
//         reverse = reverse*10 + lastdigit;
//         n = n/10;
//     }
//     cout<<reverse;
//     return 0;
// }

// *How do you reverse a string?

// int main(){
//     string str;
//     cin>>str;
//     int n = str.length();
//     for(int i=n-1; i>=0; i--){
//         cout<<str[i];
//     }
// }

// * Write a code to check whether a number is palindrome or not

// int main()
// {
//     int n;
//     cin >> n;
//     int reverse = 0;
//     int temp = n;
//     while (temp > 0)
//     {
//         int lastdigit = temp % 10;
//         reverse = reverse * 10 + lastdigit;
//         temp = temp / 10;
//     }
//     if (reverse == n)
//     {
//         cout << "Palindrome";
//     }
//     else
//     {
//         cout << "Not a Palindrome";
//     }
//     return 0;
// }

// * Write a code to check whether a number is prime or not

int main(){
    int n;
    cin>>n;
    int i;
    for(i=2; i<n; i++){
        if(n%i==0){
            cout<<"Not Prime";
            break;
        }
    }
    if(i==n){
        cout<<"Prime";
    }
    return 0;

}