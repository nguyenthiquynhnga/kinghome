import { IBlog } from "@/types/Blog";
import React from "react";
type BlogItemProps = {
    blog: IBlog
}
const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
    return (
        <>
            blog detail
        </>
    )
}

export default BlogItem;