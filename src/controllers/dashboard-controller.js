import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const playlists = await db.playlistStore.getAllPlaylists();
      const viewData = {
        title: "Playtime Dashboard",
        playlists: playlists,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPlaylist: {
    handler: async function (request, h) {
      const newPlayList = {
        title: request.payload.title,
      };
      await db.playlistStore.addPlaylist(newPlayList);
      return h.redirect("/dashboard");
    },
  },
  
  viewPlaylist: {
    handler: async function (request, h) {
      const id = request.payload._id
      await db.playlistStore.getPlayListById(id);
      return h.redirect(`/playlist/${request.payload._id}`);
    },
  },
  
  about: {
    handler: async function (request, h) {
      const viewData = {
        title: "About",
      };
      return h.view("about", viewData);
    },
  },

};
