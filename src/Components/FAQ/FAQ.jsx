import style from './FAQ.module.css';
import GoBackButton from '../GoBackButton/GoBackButton';


const FAQ = () => {
    const faqData = [
        {
            question: 'How can I add a country to my favorites?',
            answer: 'Above each country card, there is a button where you can add it to your favorites.'
        },
        {
            question: 'How can I create a tourist activity?',
            answer: 'On the right side of the navigation bar, there is a button to go to create an activity.'
        },
        {
            question: 'How can I view the details of a country?',
            answer: 'By clicking on the flag of the country, you can view the details.'
        },
        {
            question: 'Can I search for countries by name on the page?',
            answer: 'In the search input, you can enter the name of the country and it will be searched.'
        },
        {
            question: 'Do I need to create an account to use all the functionalities of the page?',
            answer: 'Yes, you need to create an account to enjoy all the options.'
        },
        {
            question: 'Can I remove a country from my favorites?',
            answer: 'Using the same button used to add it to favorites, you can remove it.'
        },
        {
            question: 'Can I remove a tourist activity from my favorites?',
            answer: 'Using the same button used to add it to favorites, you can remove it.'
        },
        {
            question: 'How many countries are available on the page?',
            answer: 'There are 250 available countries.'
        },
        {
            question: 'How can I filter countries by region or subregion?',
            answer: 'In the Home route, you can filter countries by continent, population, or ascending or descending order. You can also filter activities by season.'
        },
    ]

    return (
        <div className={style.faq}>

            <div className={style.buttonBack}>
                <GoBackButton/>
            </div>
            
            <h1 className={style.faqHeading}>Frequently Asked Questions</h1>
            <ul className={style.faqList}>
                {faqData.map((item, index) => (
                    <li key={index} className={style.faqItem}>
                        <h2 className={style.faqQuestion}>{item.question}</h2>
                        <h3 className={style.faqAnswer}>{item.answer}</h3>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default FAQ;