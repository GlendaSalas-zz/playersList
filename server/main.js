import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(()=> {
	/**
 * Class definition
 */
	class Person {
		/**
   * Pass the properties of person.
   * @param {string} name The name of the person
   * @param {int} age The age of the person
   */
		constructor(name = 'Anonymous', age = 0) {
			this.name = name
			this.age = age
		}
		/** get gretting
   * @return {string} greeting.
   */
		getGreeting() {
			return `Hello ${this.name}!`
		}
		/**
   * Function for greetings
   * @return {string} description.
   */
		getPersonDescription() {
			return `${this.name} is ${this.age} year(s) old.`
		}
	}
	/** Class Employee */
	class Employee extends Person {
		/**
   * Constructor.
   * @param {string} name The name of the person
   * @param {int} age The age of the person
   * @param {string} title The title job
   */
		constructor(name, age, title) {
			super(name, age)
			this.title = title
		}
		/**
   * @return {string} if has a job return the job
   */
		hasJob() {
			return !!this.title
		}
		/** get gretting
   * @return {string} greeting.
   */
		getGreeting() {
			if (this.title) return `Hello ${this.name} I work as a ${this.title}!`
			return super.getGreeting()
		}
	}
	/** Class Programer */
	class Programmer extends Person {
		/**
   * Constructor.
   * @param {string} name The name of the person
   * @param {int} age The age of the person
   * @param {string} preferredLanguage The title job
   */
		constructor(name, age, preferredLanguage = 'assembly') {
			super(name, age)
			this.preferredLanguage = preferredLanguage
		}
		/** get gretting
   * @return {string} greeting.
   */
		getGreeting() {
			return `Hello ${this.name} I am a ${this.preferredLanguage}!`
		}
	}
	const me = new Programmer()
	console.log(me)
	console.log(me.getGreeting())
	// console.log(me.getPersonDescription())
	// console.log(me.hasJob())
})
