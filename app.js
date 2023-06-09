const imgEl = document.querySelector("img");
const nameEl = document.getElementById("name");
const reviewEl = document.getElementById("rev");
const designationEl = document.getElementById("des");
const randomBtnEl = document.getElementById("random-rev");
const leftArrowEl = document.getElementById("left-arrow");
const rightArrowEl = document.getElementById("right-arrow");
let num = 0;

const reviewArray = [
  {
    image: "https://www.pexels.com/photo/45201/download/",
    name: "Sadaf Mahmood",
    designation: "Web Developer",
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    image:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    name: "Basim Ahmad",
    designation: "Senior Developer",
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carryI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
    name: "Irtifa Ameel",
    designation: "Intern",
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carryI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carryI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGOkdo-mmD1Wj909HN288ePug-Bd3fQIt2w4YBFFN9DWTgKNplu6Em95bBDZeMOpkffA&usqp=CAU",
    name: "Faraz Mahmood",
    designation: "Manager",
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carryI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carryI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carryI'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carryv",
  },
];
const reviewGenerator = (index) => {
  console.log(index);

  imgEl.src = reviewArray[index].image;
  nameEl.innerHTML = reviewArray[index].name;
  console.log(nameEl.innerHTML);
  reviewEl.innerText = reviewArray[index].review;
  designationEl.innerText = reviewArray[index].designation;
};

randomBtnEl.addEventListener("click", () => {
  num = Math.floor(Math.random() * 4);
  console.log(num);
  reviewGenerator(num);
});

leftArrowEl.addEventListener("click", () => {
  if (num > 0) num = num - 1;
  else if (num == 0) num = reviewArray.length - 1;
  else num = 0;
  console.log(num);
  reviewGenerator(num);
});

rightArrowEl.addEventListener("click", () => {
  if (num < reviewArray.length - 1) num = num + 1;
  else num = 0;
  console.log(num);
  reviewGenerator(num);
});
document.addEventListener("DOMContentLoaded", reviewGenerator(0));
