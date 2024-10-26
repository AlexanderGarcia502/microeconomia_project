import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Folder",
        pathname: "microeconomia_project/",
        title: "Cursos",
      },
      {
        icon: "BookOpen",
        pathname: "microeconomia_project/glossaries",
        title: "Glosario",
      },
    ],
  },
});

export { sideMenu };
