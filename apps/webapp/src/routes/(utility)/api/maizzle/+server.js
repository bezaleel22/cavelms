import * as maizzle from "@maizzle/framework";
export const GET = async ({ request }) => {
  const tmpl = `
    ---
    title: Using Maizzle on the server
    ---

  <!DOCTYPE html>
  <html>
    <head>
      <style>{{{ page.css }}}</style>
    </head>
    <body>
     <table>
      <tr>
        <td class="bg-blue hover-bg-blue-dark text-white text-center rounded">
          <p>{{{ page.title }}}</p>
        </td>
      </tr>
    </table>
    </body>
  </html>
    `;

  const { html, config } = await maizzle.render(tmpl, {
    tailwind: {
      config: {
        content: ["./src/**/*.{html,js,svelte,ts}"],
        theme: {
          extend: {},
        },
      },
      css: "@tailwind utilities;",
    },
    maizzle: {
      config: {
        build: {
          templates: {
            source: "src/templates/shopify",
            destination: {
              path: "static/template",
            },
          },
        },
      },
    },
  });

  console.log({ html });

  // const file = readFileSync("");
  // writeFileSync(`static/${data.get("name")}`, file, "base64");
  return new Response(html, { status: 200 });
};
