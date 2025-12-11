import { PortfolioProject } from '@/types/portfolio';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'time-visualizer',
    title: 'Time Visualizer',
    description: 'A React.js app to visualize how many days you\'ve lived',
    fullDescription: 'This is a simple app I created using Facebook\'s React.js to help visualize how many days they have lived so far. I\'m still updating it as needed.',
    image: '/images/portfolio/time-visualizer.JPG',
    tags: ['React.js', 'JavaScript', 'Web App'],
    liveUrl: 'http://timevisualizer.eladkarni.com',
    githubUrl: 'https://github.com/Light1c3/MyLifeinDays',
    featured: true
  },
  {
    id: 'sync-list',
    title: 'Sync-List',
    description: 'A PWA for sharing lists with friends and family',
    fullDescription: 'This is a PWA I\'ve created using React.js and Firebase that allows users to login and share lists with their friends & family. It is used for making lists when multiple people need to coordinate for an event and allows you to see who is bringing what, so you can put an end to the argument of "you said you were bringing..."!',
    image: '/images/portfolio/synclist.png',
    tags: ['React.js', 'Firebase', 'PWA'],
    featured: true
  },
  {
    id: 'native-resume-app',
    title: 'Native Resume App',
    description: 'Mobile resume app built with Xamarin Forms',
    fullDescription: 'A conversion of my website into a native app using Xamarin Forms. You can run this app natively on either Android, iOS or Windows Phones with 100% code reuse.',
    image: '/images/portfolio/resume-app.JPG',
    tags: ['Xamarin', 'C#', 'Mobile', 'Cross-platform'],
    liveUrl: 'http://appmockup.eladkarni.com',
    githubUrl: 'https://github.com/Light1c3/ResumeSiteApp',
    featured: true
  },
  {
    id: 'swimming-frog',
    title: 'Swimming Frog',
    description: 'Wildlife photography captured at the pool',
    fullDescription: 'Managed to catch this one while working at the pool. It was closed for the winter, and this little guy was enjoying his private pool.',
    image: '/images/portfolio/swimmingfrog.jpg',
    tags: ['Photography'],
    featured: false
  }
];
