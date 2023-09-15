import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  cards =[
    {
      title:'Connect with a Peer Mentor',
      subtitle:'Peer Mentors are here to help!',
      avatar:'../../assets/images/do-logo.svg',
      image: '../../assets/images/eagle-head.png',
      content: `<p>
      If you have any questions about Del Oro, need help connecting to clubs, tutors, mental health specialists, or just want to talk, the Peer Mentors are here to help! Use <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKu0nirxqJlKFkPDSKiX1T3i3sLrjo2Qsn1sV4JLuzz1UaUw/viewform?usp=sf_link">this referral form</a> for you or someone else, and we will reach out ASAP! All requests are strictly confidential.  
      </p>`
      
    },
    {
      title:'Connect with a Peer Mentor',
      subtitle:'Peer Mentors are here to help!',
      avatar:'../../assets/images/do-logo.svg',
      image: '../../assets/images/eagle-head.png',
      content: `<p>
      If you have any questions about Del Oro, need help connecting to clubs, tutors, mental health specialists, or just want to talk, the Peer Mentors are here to help! Use <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKu0nirxqJlKFkPDSKiX1T3i3sLrjo2Qsn1sV4JLuzz1UaUw/viewform?usp=sf_link">this referral form</a> for you or someone else, and we will reach out ASAP! All requests are strictly confidential.  
      </p>`
      
    }
  ]

  constructor() {}
}
