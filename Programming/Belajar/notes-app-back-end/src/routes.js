import {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    mathod: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    mathod: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

export default routes;
