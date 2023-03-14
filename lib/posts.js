import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirecotry = path.join(process.cwd(), "posts");

export function getSortedPostData() {
  // get filenames in the directory
  const fileNames = fs.readdirSync(postsDirecotry);
  // loop through filenames
  const allPostsData = fileNames.map((fileName) => {
    // remove .md extension
    const id = fileName.replace(/\md$/, "");

    // read markdown file as string
    const fullPath = path.join(postsDirecotry, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // user greay-matter to parse the post metadata
    const grayMatterResult = matter(fileContents);

    // return object with id and data
    return {
      id,
      ...grayMatterResult.data
    };
  });

  // Sport posts by data
  return allPostsData.sort((a, b) => {
    // sort logic
    if (a.data < b.data) {
      return 1;
    } 
    else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirecotry);

  // Returns an array shape:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  // TODO: add ccheck for ids
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });

}

export async function getPostData(id) {
  const fullPath = path.join(postsDirecotry, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post data from md files
  const grayMatterResult = matter=(fileContents);

  // Use remark to convert mark
  const processedContent = await remark().use(html).process(grayMatterResult.content);
  const contentHTML = processedContent.toString();
  
  // return object with id and content
  return {
    id,
    contentHTML,
    ...grayMatterResult.data,
  };
}