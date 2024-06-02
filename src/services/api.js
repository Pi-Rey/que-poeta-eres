import dataPoems from "../services/poems.json";

const getPoems = () => {
  return dataPoems.map(poem => {
    return {
      idAuthor: poem.id,
      author: poem.author,
      poem1title: poem.poems.poem_1.title,
      poem1text: poem.poems.poem_1.text,
      poem1key: poem.poems.poem_1.keyword,
      poem2title: poem.poems.poem_2.title,
      poem2text: poem.poems.poem_2.text,
      poem2key: poem.poems.poem_2.keyword,
      poem3title: poem.poems.poem_3.title,
      poem3text: poem.poems.poem_3.text,
      poem3key: poem.poems.poem_3.keyword,
      poem4title: poem.poems.poem_4.title,
      poem4text: poem.poems.poem_4.text,
      poem4key: poem.poems.poem_4.keyword,
      poem5title: poem.poems.poem_5.title,
      poem5text: poem.poems.poem_5.text,
      poem5key: poem.poems.poem_5.keyword
    };
  });
};

export default getPoems;
