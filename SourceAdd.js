const form = document.querySelector('#js-form');
const input = document.querySelector('#js-input');
function listening(){
    form.addEventListener("submit", start)
};
function start(){document.write(`&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Bumru's Blog&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div&gt;
        &lt;div class=&quot;allmenu&quot;&gt;
            &lt;h1 class=&quot;title&quot;&gt;Bumru's Blog&lt;/h1&gt;
        &lt;div class=&quot;menu&quot;&gt;
            &lt;ol id=&quot;top-menu&quot;&gt;
                &lt;li&gt;&lt;a href=&quot;!&quot; id=&quot;menu-1&quot;&gt;Introduce&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;https://www.youtube.com/channel/UCYmJgFJh8CIpb5Hmig7FdBw&quot; id=&quot;menu-2&quot;&gt;Youtube&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;https://github.com/bumru&quot; id=&quot;menu-3&quot;&gt;Github&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;source.html&quot; id=&quot;menu-4&quot;&gt;Source&lt;/a&gt;&lt;/li&gt;
            &lt;/ol&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div id=&quot;grid&quot;&gt;
        &lt;div class=&quot;nav&quot;&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;index.html&quot;&gt;HTMl,CSS&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;javascript.html&quot;&gt;JavaScript&lt;/li&gt;&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;python.html&quot;&gt;Python&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;c.html&quot;&gt;C&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div class=&quot;main&quot;&gt;
            The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as img and input directly introduce content into the page. Other tags such as &lt;p&gt; surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.

HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2]
        &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
`)}
function init(){
    listening();
}
init();