import React, { useState, useEffect } from "react";

import { Client } from "../../lib/client";
import CardComparision from "./CardComparision";

const Comparision = () => {
  const [BestGlance, setBestGlance] = useState([]);
  useEffect(() => {
    Client.fetch(
      `*[_type == "bestglance"] {
                title,
                slug,
                body,
                viewscount,
                publishedAt,
                customersupport,
                easeofuse,
                features,
                fullreview,
                inventory,
                payment,
                pricing,
                reviews,
                security,
                seomarketing,
                templateanddesign,
                website,
                mainImage {
                  asset -> {
                    _id,
                    url
                  },
                  alt,
                },
                "Dtype": glancetype -> glancetype,
              } | order(publishedAt desc)`
    )
      .then((data) => {
        setBestGlance(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  const unique = [...new Set(BestGlance.map((item) => item.Dtype))];
  return (
    <div>
      {BestGlance[0] && (
        <div className="wrapper">
          {unique.map((head) => (
            <>
              <h3>{head}</h3>
              <div className="content-cont">
                {BestGlance.map(
                  (d) =>
                    d.Dtype === head && (
                      <div className="wrapper-sec">
                        <CardComparision
                          title={d.title}
                          
                          viewscount={d.viewscount}
                          customersupport={d.customersupport}
                          easeofuse={d.easeofuse}
                          features={d.features}
                          fullreview={d.fullreview}
                          inventory={d.inventory}
                          payment={d.payment}
                          pricing={d.pricing}
                          reviews={d.reviews}
                          security={d.security}
                          seomarketing={d.seomarketing}
                          templateanddesign={d.templateanddesign}
                          website={d.website}
                        />
                      </div>
                    )
                )}
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comparision;
