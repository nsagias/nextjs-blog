import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
  return filenNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}