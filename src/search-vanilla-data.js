import Airtable from "airtable";

const token =
  "pat6hsqOCYJDemATs.644bd3444b2d22d360689ef2d46ea1ef27ffc97ee6960e112fc0f3cc1e9078fc";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: token,
});

let base = Airtable.base("appVfxOFqSchAJJK7");

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = [];

    base("articles")
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields["Tags"],
            image: record.fields["Image"],
            title: record.fields["Title"],
            description: record.fields["Description"],
          });
        });

        resolve(content);
      });
    console.log(content);
  });
}

export { getPostTeasers };