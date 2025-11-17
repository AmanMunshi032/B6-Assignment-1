1 What are some differences between interfaces and types in TypeScript?
Ans: TypeScript-এ interface এবং type alias—দুটোই structure বা shape ডিফাইন করতে ব্যবহৃত হয়। তবে এদের মধ্যে কিছু মৌলিক পার্থক্য রয়েছে।

 মূল পার্থক্যগুলো হোল:
1 Extends করা
interface → extends করা যায় type → intersection (&) দিয়ে merge করা যায়
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}
type A = { x: number };
type B = A & { y: number };


2 Declaration Merging
interface → একাধিকবার declare করলে merge হয়ে যায type → merge হয় না
interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = { name: "Aman", age: 22 };


2 Explain the difference between any, unknown, and never types in TypeScript.
Ans: TypeScript-এ এই তিনটি type সবচেয়ে বেশি বিভ্রান্তি তৈরি করে। এদের কাজ সম্পূর্ণ 

any — সবকিছু অনুমতি দেয়
আপনি যেকোনো operation করতে পারবেনType checking বন্ধ হয়ে যায় ভুল করার সম্ভাবনা বেশি
let a: any = "Hello";
a = 10;
a = true;

unknown — নিরাপদ any
unknown-এ value assign করা যায় কিন্তু use করার আগে type-check করতে হবে
let data: unknown = "Hello";
if (typeof data === "string") {
  console.log(data.toUpperCase());
}

never — কখনোই ঘটবে না এমন value
return করা অসম্ভব সাধারণত error throw করা function-এ ব্যবহৃত হয়
function throwError(msg: string): never {
  throw new Error(msg);
}

