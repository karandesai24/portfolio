import emailjs from "@emailjs/browser";

const mail = (data) => {
  console.log(data);
  return emailjs.send(
    "service_z7ghxdb",
    "template_3jliotp",
    data,
    "JA5wdJKFlaH8k1oLn"
  );
};

export default mail;
