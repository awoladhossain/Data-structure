# ** linear search

def linearSearch(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1

arr = [2, 3, 4, 10, 40]
x = 10

result = linearSearch(arr, x)
if result == -1:
    print("Element is not present in array")
else:
    print("Element is present at index", result)
    
# Output: Element is present at index 3