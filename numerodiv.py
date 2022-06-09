def numeroDiv(n):
    a=0
    for d in range(1,n):
        if(n % d == 0):
            a+=d
            print(d) #impresion de divisores
    if(n==a):
        print("Es numero perfecto")
    else:
        print("No es numero perfecto")


n = int(input("Ingrese un numero: "))
print("Divisores: ")
numeroDiv(n)
    
