import React from "react";

export default function Map() {
  return (
    <div className=" h-64 md:h-96 mt-10">
     <iframe 
     src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7777.051104512588!2d77.69103071475776!3d12.938186655767616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae13b26920ebe3%3A0xfc72f83616e55cad!2sIndiQube%20Alpha%2C%20Marathahalli%20Panathur%20Junction%2C%20Plot%20No.19%2F4%2027%2C%20Outer%20Ring%20Rd%2C%20Kadubeesanahalli%2C%20Panathur%2C%20Bengaluru%2C%20Karnataka%20560103!3m2!1d12.939411!2d77.6956204!5e0!3m2!1sen!2sin!4v1727353675948!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
