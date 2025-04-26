/* eslint-disable quotes, semi, comma-dangle */

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BooksView from "../views/BooksView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";
import AshesView from "../views/AshesView.vue";
import DragonsoneView from "../views/DragonsoneView.vue";
import DragonstwoView from "../views/DragonstwoView.vue";
import DragonsthreeView from "../views/DragonsthreeView.vue";
import WarriorsView from "../views/WarriorsView.vue";
import ChroniclesView from "../views/ChroniclesView.vue";
import GravisView from "../views/GravisView.vue";
import SilentView from "../views/SilentView.vue";
import DanceView from "../views/DanceView.vue";
import TeamView from "../views/TeamView.vue";
import InternView from "../views/InternView.vue";
import FormView from "../views/FormView.vue";
import AshesTwoView from "../views/AshesTwoView.vue";
import GravisTwoView from "../views/GravisTwoView.vue";
import EclipseView from "../views/EclipseView.vue";
import ArrowBooks from "../components/ArrowBooks.vue";
import ButtonView from "../components/ButtonView.vue";
import PlanOneView from "@/views/PlanOneView.vue";
import PlanTwoView from "@/views/PlanTwoView.vue";
import PlanThreeView from "@/views/PlanThreeView.vue";
import ThankyouView from "@/views/ThankyouView.vue";
import InternthanksView from "@/views/InternthanksView.vue";
import PlanonethanksView from "@/views/PlanonethanksView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/ashes",
    name: "ashes",
    component: AshesView,
  },
  {
    path: "/silent",
    name: "silent",
    component: SilentView,
  },
  {
    path: "/dance",
    name: "dance",
    component: DanceView,
  },
  {
    path: "/dragonsone",
    name: "dragonsone",
    component: DragonsoneView,
  },
  {
    path: "/dragonstwo",
    name: "dragonstwo",
    component: DragonstwoView,
  },
  {
    path: "/dragonsthree",
    name: "dragonsthree",
    component: DragonsthreeView,
  },
  {
    path: "/warriors",
    name: "warriors",
    component: WarriorsView,
  },
  {
    path: "/chronicles",
    name: "chronicles",
    component: ChroniclesView,
  },
  {
    path: "/gravis",
    name: "gravis",
    component: GravisView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
  {
    path: "/intern",
    name: "intern",
    component: InternView,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
  {
    path: "/ashestwo",
    name: "ashestwo",
    component: AshesTwoView,
  },
  {
    path: "/gravistwo",
    name: "gravistwo",
    component: GravisTwoView,
  },
  {
    path: "/eclipse",
    name: "eclipse",
    component: EclipseView,
  },
  {
    path: "/arrowbooks",
    name: "arrowbooks",
    component: ArrowBooks,
  },
  {
    path: "/button",
    name: "button",
    component: ButtonView,
  },
  {
    path: "/planone",
    name: "planone",
    component: PlanOneView,
  },
  {
    path: "/plantwo",
    name: "plantwo",
    component: PlanTwoView,
  },
  {
    path: "/planthree",
    name: "planthree",
    component: PlanThreeView,
  },
  {
    path: "/thanks",
    name: "thankyou",
    component: ThankyouView
  },
  {
    path: "/internthanks",
    name: "internthanks",
    component: InternthanksView
  },
  {
    path: "/planonethanks",
    name: "planonethanks",
    component: PlanonethanksView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
