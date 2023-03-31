import { juiceResources } from "juice";
import type { Options as JuiceOptions } from "juice"

interface SvelteSSRComponent {
    render(data: {}): { html: string; css: { code: string }; head: string };
}

export const renderMail = async (
    Component: SvelteSSRComponent,
    { data = {}, ...options }: { data?: {} } & JuiceOptions & any = {}
): Promise<string> => {
    const { html: rawHtml, css, head } = Component.render(data);

    if (head) {
        console.error("Rendering a document head is not supported");
    }

    return await new Promise((resolve, reject) => {
        juiceResources(
            `${css.code ? `<style>${css.code}</style>` : ""}${rawHtml}`,
            options,
            (err, result) => (err ? reject(err) : resolve(result))
        );
    });
};