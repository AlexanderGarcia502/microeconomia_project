import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Folder",
        pathname: "/",
        title: "Cursos",
      },
      {
        icon: "BookOpen",
        pathname: "/glossaries",
        title: "Glosario",
      },
    ],
  },
});

export { sideMenu };
