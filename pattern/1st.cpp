#include <iostream>
using namespace std;

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

int main()
{
    int n = 3;
    char ch = 'A';
    for (int i = 0; i < n; i++)
    {

        for (int j = 0; j < n; j++)
        {
            cout << ch << " ";
            ch++;
        }
        cout << endl;
    }
}