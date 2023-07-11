import React from "react";
import { StyledBlog } from "../styles/Stylesheet";
import SingleBlog from "../components/SingleBlog";

function Blog() {
  return (
    <StyledBlog>
      <div className="header">
        <h2>Blogs</h2>
        <p>News & Events</p>
      </div>

      <SingleBlog
        image="https://cdn.nar.realtor/sites/default/files/styles/inline_image_auto_height__287_/public/sss_f_kitchen_teaser_otherfeatureslikepremium-gradestainlesssteelgivetheappliancesanupscalelookandfeel_.jpg?itok=hjBhZWk-"
        title="The Most Popular Finishes in Kitchen Remodels"
        desc="From sinks to faucets, find out what consumers prefer when outfitting
        their new kitchen."
        author="Melissa Dittmann Tracey"
        tag="Styled, Staged & Sold"
      />
      <SingleBlog
        image="https://cdn.nar.realtor/sites/default/files/styles/inline_image_auto_height__287_/public/cs_summer23_pioneers_tdallassmith.jpeg?itok=l59Uf37p"
        title="A History and a Mission of Breaking Barriers"
        desc="Atlanta broker’s book is part memoir, part guide for young Black men and women seeking to make it in commercial real estate."
        author="Anne-Marie Siudzinski"
        tag="Culture Scan"
      />
      <SingleBlog
        image="https://cdn.nar.realtor/sites/default/files/styles/inline_image_auto_height__287_/public/spaces-to-places-blog-burnsville-juneteenth-flag-03-24-2023-1300w-867h.jpg?itok=6Z9TV7zl"
        title="Fair Housing Placemaking Projects Support Underserved Communities"
        desc="The Saint Paul Area Association of REALTORS® championed diversity, equity and inclusion in new public gathering places."
        author="Becky Wegscheid"
        tag="Fair Housing, Smart Growth"
      />
    </StyledBlog>
  );
}

export default Blog;
