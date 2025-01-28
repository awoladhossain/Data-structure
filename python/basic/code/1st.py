#  Write a code to reverse a number

# def reverse_number(n):
#     rev = 0
#     while n>0:
#         rem = n%10
#         rev = rev*10+rem
#         n = n//10
#     return rev


# n = int(input("Enter a number: "))
# print("Reverse of the number is: ", reverse_number(n))


# * reverse a string

# def  main():
#     str = input("Enter a string: ")
#     lenStr = len(str)
#     revStr = ""
#     for i in range(lenStr-1, -1, -1): # range(start, stop, step)
#         revStr = revStr + str[i]
    
#     print("Reverse of the string is: ", revStr)

# main()

# * Write a code to check whether a number is palindrome or not

# def main():
#     n = int(input("Enter a number: "))
#     temp = n
#     rev = 0
#     while n>0:
#         rem = n%10
#         rev = rev*10+rem
#         n = n//10

#     if temp == rev:
#         print("Number is palindrome")
#     else:
#         print("Number is not palindrome")

# main()

# * prime number

# def main():
#     n = int(input("Enter a number: "))
#     flag = 0
#     for i in range(2, n):
#         if n%i == 0:
#             flag = 1
#             break
    
#     if flag == 0:
#         print("Number is prime")
#     else:
#         print("Number is not prime")

# main()
    