import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	function addMeetupHandler(meetupData) {
		fetch(process.env.REACT_APP_COURSE_NEW_MEETUP_API, {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;
