import React from "react";
import { StyledBlog } from "../styles/Stylesheet";
import SingleBlog from "../components/SingleBlog";

function Blog() {
  return (
    <StyledBlog>
      <div className="overlay" />

      <div className="header">
        <h2>Blogs</h2>
      </div>
      <SingleBlog
        link="https://www.nar.realtor/blogs/styled-staged-sold/home-maintenance-checklist-to-avoid-costly-repairs"
        image="https://cdn.nar.realtor/sites/default/files/styles/inline_paragraph_image/public/sss_maintenance_gettyimages-857493376.jpg?itok=1nMKKw16"
        title="Home Maintenance Checklist to Avoid Costly Repairs"
        desc="Many homeowners have anxiety when it comes to maintaining their home, a survey shows. Here’s a breakdown of the top projects."
        author="Realtor.com"
        tag="Styled, Staged & Sold"
      />
      <SingleBlog
        link="https://www.nar.realtor/magazine/real-estate-news/sales-marketing/8-strategies-for-maintaining-a-home-as-an-asset"
        image="https://cdn.nar.realtor/sites/default/files/styles/inline_paragraph_image/public/gettyimages-1268388241.jpg?itok=L25fcQwL"
        title="8 Strategies for Maintaining a Home as an Asset"
        desc="High-profile bank failures offer lessons worth sharing with your clients and customers."
        author="Daniel Smith"
        tag="Marketing, Homeownership Education & Counseling"
      />
      <SingleBlog
        link="https://www.nar.realtor/magazine/real-estate-news/buyers-reveal-their-most-unexpected-housing-costs"
        image="https://cdn.nar.realtor/sites/default/files/styles/inline_paragraph_image/public/assets/images/103919678.jpg?itok=wqNXfWx3"
        title="Buyers Reveal Their Most Unexpected Housing Costs"
        desc="As home buyers have stretched their budgets to buy, they have discovered more unexpected costs of homeownership."
        author="Realtor Magazine"
        tag="Homeownership Education & Counseling"
      />
    </StyledBlog>
  );
}

export default Blog;
