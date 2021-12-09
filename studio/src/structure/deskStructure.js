// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdPerson, MdDescription } from "react-icons/md";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Navigation")
        .icon(MdPerson)
        .child(
          S.editor()
            .id("navigation")
            .schemaType("navigation")
            .documentId("navigation")
        ),
      S.divider(),
      S.listItem()
        .title("Pages")
        .icon(MdDescription)
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),
      S.divider(),
      S.listItem()
        .title("Posts")
        .icon(MdDescription)
        .schemaType("post")
        .child(S.documentTypeList("post").title("Posts")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["post", "siteSettings", "page", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
