## Interview Questions & Answers:

# 1 : What is TypeScript, and how is it different from JavaScript?

- Answer: Typescript is a programming language which is basically  
  superset of javascript . And it adds static types and other
  features to javascript .

     Different: Main different is typescript support static typing .
     That means variable , functions , objects , parameters etc.
     returning explicitly type , And base on that type compiler can
     check is there have similar type follow or have problem . SO by
     that developer can easily understand the problems .

     Also in typescript have other features which not available in
     javascript.like touple , classes , enums , interfaces etc.

# 2: Can you explain the difference between "interface" and "type" in TypeScript?

- Answer: Interface and type alias both are for define types .
  Main difference is by type alias can define any kind of type like
  for variables , objects , functions etc , but by interface can
  define just object , functions types .
  By interface can make a shape of an object by related data

     Another difference is interface can be merged and extended but
     type can't. Means if you create an interface and again create
     another inteface by same name than new one will merge with
     existing one and will behave like single interface .

# 3: Can you give an example of how to use generics in TypeScript?

- Answer: Basically generic in typescript is a very usefull feature . We are
  using it when we need to implement 1 common function , classes ,interfaces  
  or common type alias for multiple type . And by this we can write reusable
  code by that can work with any type .

     some examples :

          ```
          //Common Array type (Generic type)

          type common_param<T> = Array<T>

          let fruits:common_param<string>=["Apple"," Banana","Mango"] // this is string type array

          let numbers_list:common_param<number> = [1,2,3,4] // this is numer type arry

         // In above we used a single type alias for 2 different type of array .


          ```

     ```
     // Generic Function

     const createGenericArray = <T>(param: T): T[] => {
      return [param];
      };

     const names = createGenericArray<string>("Ahsan");

     const names2 = createGenericArray<{ name: string; age:number }>
     ({name: "Ahsan",age: 90,});

     // see in names variable function will  return just string type array but in names 2 variable that same function will return an object type array .

     ```

# 4: What is the difference between an "unknown" and "any" type in TypeScript?

- Answer: "unknown" and "any" both are for dynamic and unknown values .
  "any" can catch all the the that could be set to any value . So when set a value to a variable which is "any" type than typescript compiler allows to set any operation on that , and it will not provide any type checking .

     ```
     let str:any = "I love BD";
     console.log(str.concat("Bangladesh"))
     ```

     On the other hand by "unknown" type , typescript compiler not allows working with that without type checking . For this reason its more saftey from "any" type .

     ```
     let str:unknown = "I love BD";

     if (typeof str ==="string"){
       console.log(str.concat("Bangladesh"))
     }

     ```

# 5: What is the "as" keyword used for in TypeScript?

- Answer: `as` is the type assertion operator . It used in typescript to force typescript compiler that a value of a type should be another type .

```
 let str:any = "I love BD";
 let add_str:number = (str as string).concat("Bangladesh");
```

In that example can see `str` was any type value . But next `add_str` variable force it to that `str` is `string` type and by that can access `concat` property of string .
