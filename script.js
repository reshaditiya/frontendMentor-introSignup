// UNOCSS
window.__unocss = {
	theme: {
		colors: {
			primaryRed: "hsl(0, 100%, 74%)",
			primaryGreen: "hsl(154, 59%, 51%)",
			accentBlue: "hsl(248, 32%, 49%)",
			neutralDark: "hsl(249, 10%, 26%)",
			neutralGray: "hsl(246, 25%, 77%)",
		},
		fontFamily: {
			poppins: "Poppins, sans-serif",
		},
	},
	shortcuts: {
		input: "border-1.5 border-black w-full pl-4.5 pr-16 py-3.5 text-3.5 tracking-0.1 font-500 border-neutral-gray placeholder-neutral-gray text-neutral-dark rounded-1.5 md:pl-7.5 ",
		"shadow-out": "shadow-[0rem_0.5rem_rgba(62,60,73,0.2)]",
		"shadow-in": "shadow-[inset_0rem_-0.25rem_rgba(62,60,73,0.2)]",
		"warning-label":
			"text-primary-red text-right text-2.75 tracking-0.01 italic",
		"input-icon":
			"absolute flex justify-center items-center top-3.75 right-6.75",
	},
}

// ALPINE
document.addEventListener("alpine:init", () => {
	Alpine.data("signupform", () => ({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		isSubmitted: false,
		submit() {
			if (
				this.firstName !== "" &&
				this.lastName !== "" &&
				this.email !== "" &&
				this.isValidEmail() &&
				this.email !== "" &&
				this.password !== ""
			) {
				this.firstName = ""
				this.lastName = ""
				this.email = ""
				this.email = ""
				this.password = ""
				this.isSubmitted = false
			} else {
				this.isSubmitted = true
			}
		},
		isValidEmail() {
			var regexMail = /\S+@\S+\.\S+/
			return regexMail.test(this.email)
		},
	}))
})
