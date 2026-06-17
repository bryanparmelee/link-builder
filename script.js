const embedCode = document.querySelector("#embed-code");
const link = document.querySelectorAll(".link");
const heroImage = document.querySelector(".heroImage");
const headlineLink = document.querySelector(".headlineLink");
const authorText = document.querySelector(".authorText");
const descriptionText = document.querySelector(".descriptionText");
const ctaText = document.querySelector(".ctaText");
const helperText = document.querySelector(".helper-text");
const submitButton = document.querySelector("#submit-button");

const urlField = document.querySelector("#url");
const imgUrlField = document.querySelector("#imgUrl");
const headlineField = document.querySelector("#headline");
const authorField = document.querySelector("#author");
const descriptionField = document.querySelector("#description");
const ctaField = document.querySelector("#cta");

urlField.addEventListener("input", (e) => {
  link.forEach((l) => l.setAttribute("href", e.target.value));
});

imgUrlField.addEventListener("input", (e) => {
  heroImage.setAttribute("src", e.target.value);
});

headlineField.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    headlineLink.textContent = "Headline";
  } else {
    headlineLink.textContent = e.target.value;
  }
});

authorField.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    authorText.textContent = "By";
  } else {
    authorText.textContent = `By ${e.target.value}`;
  }
});

descriptionField.addEventListener("input", (e) => {
  if (e.target.value === 0) {
    descriptionText.textContent = "Description";
  } else {
    descriptionText.textContent = e.target.value;
  }
});

ctaField.addEventListener("input", (e) => {
  if (e.target.value === 0) {
    ctaText.textContent = "READ NOW";
  } else {
    ctaText.textContent = e.target.value.toUpperCase();
  }
});

const handleSubmit = async () => {
  const url = urlField.value;
  const imageUrl = imgUrlField.value;
  const headline = headlineField.value;
  const author = authorField.value;
  const description = descriptionField.value;
  const cta = ctaField.value.length > 0 ? ctaField.value : "READ NOW";

  const embed = `<p>
    <a href="${url}" target="_blank" tabindex="-1">
		<img src="${imageUrl}" alt="" width="100%" height="auto" class="heroImage"></a>  
	</p>
	<h3>
		<a href="${url}" target="_blank" tabindex="-1" style="text-decoration: none !important; font-weight: bold;">${headline}</a></h3>
	<h4>By ${author} </h4>
	<p style="margin: 0px;">${description}</p>
	<p style="align: center; text-align: center;"><a href="${url}" tabindex="-1" style="align: center; text-align: center; background-color: #00807F; border-radius: 4px; color: #fff; display: inline-block; font-family: sans-serif; font-size: 16px; font-weight: bold; line-height: 55px; width: 155px; -webkit-text-size-adjust: none; text-decoration: none !important;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 16px"><span style="font-family: sans-serif"><span style="background-color: rgb(0, 128, 127)">${cta}</span></span></span></span></strong></a>
	</p>`;

  try {
    navigator.clipboard.writeText(embed);
    helperText.textContent = "Embed code copied to clipboard!";
    helperText.classList.add("show", "success");
    setTimeout(() => {
      helperText.classList.remove("show", "success");
    }, 2000);
  } catch (error) {
    console.log(error);
    helperText.textContent = "Failed to copy embed code";
    helperText.classList.add("show", "error");
    setTimeout(() => {
      helperText.classList.remove("show", "success");
    }, 2000);
  }
};

submitButton.addEventListener("click", handleSubmit);
