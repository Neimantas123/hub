import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import NewsItemComponent from './components/news/NewsItem';
import AllNewsComponent from './components/news/AllNews';
import AllEvents from './components/events/AllEvents';
import InstagramPostDetail from './components/instagram/InstagramPostDetail';

const news = [
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'IMG’s New Virtual Client, Vernon Fronts Kenzo, Shu Qi Is the Face of Michael Kors',
    link: 'https://wwd.com/fashion-news/fashion-scoops/imgs-new-virtual-client-vernon-fronts-kenzo-shu-qi-is-the-face-of-michael-kors-ads-1235781992/',
    content: [
      `IMG Models has signed "alien influencer" Zlu, Vernon appears in Kenzo's fall campaign, Shu Qi makes her debut for Michael Kors.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Zlu_metro_photo7-copy.jpg?crop=0px%2C44px%2C3024px%2C1692px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'What to Watch: Gucci’s New Design, Management Course',
    link: 'https://wwd.com/fashion-news/designer-luxury/what-to-watch-gucci-new-design-management-course-1235760487/',
    content: [
      `The first collection by creative director Sabato De Sarno on Sept. 22 will kick off a new phase for the brand, which is being further revamped by the major management reshuffle revealed in July.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/BFA_40311_5674097_v1_QC_R150.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Best Fall/Winter 2023 Fashion Campaigns',
    link: 'https://www.elle.com/fashion/trend-reports/g44506121/best-fall-winter-campaigns-2023/',
    content: [
      `Fall already? We can hardly believe it either. Even though we’re dripping in sweat simply looking at any coats right now, the campaigns of the season provide a good idea of what to expect in stores come September. We’re starting to
      `,
    ],

    image:
      'https://hips.hearstapps.com/hmg-prod/images/master-file-pr-1080x1350px13-min-64f0c63e883c0.jpg?crop=1.00xw:0.401xh;0,0&resize=1200:*',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Kering issues 3.8 billion euro bond loan to finance Creed acquisition',
    link: 'https://fashionunited.uk/news/business/kering-issues-3-8-billion-euro-bond-loan-to-finance-creed-acquisition/2023083171330',
    content: [
      `Luxury fashion conglomerate Kering has issued a bond loan of 3.8 billion euros, which it said would “notably” finance its acquisition of perfume house Creed.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/27/kering-creed-3-4fy0ldje-2023-06-27-03c8ons8-2023-06-27.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Theory Taps Chloé’s Chief Commercial Officer Marco Gentile as CEO for Europe and U.K.',
    link: 'https://wwd.com/business-news/human-resources/chloe-marco-gentile-joins-theory-ceo-europe-uk-1235782247/',
    content: [
      `At Chloé, he oversaw the brand’s global retail and wholesale operations and strategy.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Marco_11858.jpg?crop=0px%2C90px%2C4353px%2C2440px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Anderson’s Art Show, Jimmy Choo’s New Campaign, Calzedonia to Show in Milan',
    link: 'https://wwd.com/fashion-news/fashion-scoops/andersons-art-show-jimmy-choos-new-campaign-calzedonia-show-in-milan-1235783079/',
    content: [
      `Jonathan Anderson is curating an art show in London, Jimmy Choo unveiled its fall ad campaign, Calzedonia will show in Milan on Sept. 19.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Lucian-Freud_Pigeon_1946-copy.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'What to Watch: The New Course of Tom Ford Fashion ',
    link: 'https://wwd.com/fashion-news/designer-luxury/new-course-tom-ford-fashion-1235758265/',
    content: [
      `Eyes will be on the debut of Peter Hawkings as creative director of the brand, licensed to the Ermenegildo Zegna Group, and the newly appointed CEO Lelio Gavazza.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/1080x1350-portrait-hawkings-1.jpg?crop=0px%2C32px%2C1080px%2C605px&resize=1000%2C563',
  },

  {
    title: 'All the Best Spring/Summer 2023 Fashion Campaigns ',
    link: 'https://wwd.com/fashion-news/designer-luxury/new-course-tom-ford-fashion-1235758265/',
    content: [
      `The fashion calendar is moving full speed ahead, and the plethora of campaigns for the spring/summer 2023 boast fashion that is sure to stop you in your sartorial tracks. Click through to
      `,
    ],

    image:
      'https://hips.hearstapps.com/hmg-prod/images/rose-64c92bc0c7da6.jpg?crop=1.00xw:0.401xh;0,0&resize=1200:*',
  },

  {
    title: 'Lanvin Group posts increase in H1 revenue, but losses widen',
    link: 'https://fashionunited.uk/news/business/lanvin-group-posts-increase-in-h1-revenue-but-losses-widen/2023083071315',
    content: [
      `Luxury fashion group Lanvin has reported widening losses in the first half of the year despite a 6.4 percent increase in revenue.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/02/20/wechatimg726-2000x1125-zhij32iq-2021-11-22-qfc60dwg-2022-11-23-nrxbs4pt-2022-11-23-jrrq5i1o-2023-02-02-du783r8h-2023-02-20.jpeg',
  },

  {
    title: 'La Bouche Rouge Placed in Receivership',
    link: 'https://wwd.com/beauty-industry-news/color-cosmetics/french-beauty-brand-la-bouche-rouge-placed-receivership-paris-1235782184/',
    content: [
      `The French label known for its luxury, plastic-free lipsticks filed for court protection in July.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2020/07/image_02_famille-_mascara_chocolat.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    title:
      'Marni, Casablanca and Peter Do: Paris Fashion Week SS24 is full of first timers',
    link: 'https://fashionunited.uk/news/fashion/marni-casablanca-and-peter-do-paris-fashion-week-ss24-is-full-of-first-timers/2023082971296',
    content: [
      `As fashion month quickly descends upon the industry, the federations from each fashion capital have begun to publish their official schedules, giving an insight into what we ca
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/29/marni-clp-po-f23-002-jv5oanai-2023-08-29.jpeg',
  },
  {
    title: 'The 13 Best Drugstore Skin Care Products Money Can Buy',
    link: 'https://www.elle.com/beauty/makeup-skin-care/g44785924/best-drugstore-skincare-products/',
    content: [
      `The sprawling aisles of a drugstore are home to all the goods we need to maintain healthy and effective beauty routines. It's the safe haven we run to when we need a deep conditioner for parched strands, or a quick and easy press-on 
      `,
    ],

    image:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1425995237a-64e8f0cfce6d1.jpg?resize=1200:*',
  },
  {
    title: 'Chanel Celebrates Chance Fragrance With Lucky Chance Diner',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/chanel-celebrates-chance-fragrance-with-diner-1235780235/',
    content: [
      `Weeks after opening a new beauty boutique in the neighborhood, Chanel is kicking off a pop-up in Williamsburg, Brooklyn. To commemorate the launch of Chanel Chance Eau Fraîche eau de parfum, as well as the boutique’s opening, Chanel is taking over a diner in the buzzy neighborhood from Sept. 8 through Sept. 10. Dubbed the Chanel Lucky Ch ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Chance-Exterior.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    title:
      'Chanel-Sponsored Korean Traditional Crafts Exhibition Open Ahead of Frieze Seoul',
    link: 'https://wwd.com/fashion-news/fashion-scoops/chanel-sponsored-korean-traditional-crafts-show-1235782190/',
    content: [
      `Chanel has collaborated with Yéol Korean Heritage Preservation Society for the second consecutive year to support local traditional crafts. 
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/2023-Chanel-x-Yeol_collaboration_art.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    title: 'Lanvin Group Eyes Bounceback, to Name Artistic Director',
    link: 'https://wwd.com/business-news/financial/lanvin-group-h1-revenues-financial-1235782172/',
    content: [
      `The luxury firm's sales grew in the first half, but its flagship brand sputtered due to "fewer key product and marketing initiatives."
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/GLC07651.jpg?crop=0px%2C220px%2C2048px%2C1146px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Jil Sander and the Power of Love',
    link: 'https://www.businessoffashion.com/opinions/luxury/jil-sander-and-the-power-of-love/',
    content: [
      `Designers Luke and Lucie Meier have softened the fast-growing brand’s signature rigour with a newfound dreaminess that is all about them, writes Tim Blanks.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/fgJRdUKRw7WnkPwLCsp8H0zmcPk=/1440x0/filters:format(jpg):quality(70):focal(750x531:760x541)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/UCU3O3CGWBC3PGYOH5IMZWY5J4.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Marni, Maison Margiela and Mugler Among Highlights of Paris Provisional Calendar',
    link: 'https://wwd.com/fashion-news/fashion-features/marni-maison-margiela-mugler-highlights-paris-provisional-calendar-carven-casablanca-1235779976/',
    content: [
      `Marni, Maison Margiela and Mugler Among Highlights of Paris Provisional Calendar
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/GettyImages-1459912573.jpg?crop=0px%2C237px%2C4256px%2C2381px&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Best New Beauty Launches of August 2023',
    link: 'https://www.wmagazine.com/beauty/best-new-makeup-skincare-products-tools-august-2023',
    content: [
      `With such an enormous range of beauty and skincare products (celeb-backed or otherwise) released each month, how can you discern wh
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/8/22/c08243cc-9131-45ba-9f09-1702274813ff-bestofbeauty_august_alternate.jpg?w=900&h=1125&fit=crop&crop=faces&auto=format%2Ccompress',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Too Faced co-founders launch new ‘clean’ beauty brand',
    link: 'https://fashionunited.uk/news/business/too-faced-co-founders-launch-new-clean-beauty-brand/2023082871268',
    content: [
      `Jerrod Blandino and Jeremy Johnson, the co-founders of Too Faced, have unveiled a new “clean” beauty brand as part of their latest venture.


      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/28/jerrod-jeremy-e-kqm6t14n-2023-08-28.jpeg',
  },

  {
    title: 'Op-Ed | Fashion’s Sustainability Tools Prop Up a Broken System',
    link: 'https://www.businessoffashion.com/opinions/sustainability/fashion-overproduction-waste-lca-impact-assessmnet-problem/',
    content: [
      `Efforts to measure the environmental impact of clothes have a fatal flaw: They don’t account for overproduction, argues Beth Esponnette.

      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/Pg6_IPseDoUJbIDcGo3cERgrqII=/1440x0/filters:format(jpg):quality(70):focal(894x333:904x343)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/WCREMIIPMZBUBJJ2Q2FWPXOORI.jpg',
  },

  {
    title: '‘NYFW: The Shows’ Rolls Out Programming and Events',
    link: 'https://wwd.com/fashion-news/fashion-features/nyfw-the-shows-rolls-out-programming-events-1235779149/',
    content: [
      `While many are making the most of the waning days of summer, IMG has rolled out the agenda for New York Fashion Week: The Shows.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2017/08/90s-models-2.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title:
      'What to Watch: Luxury Bets on China’s Wealthy Shoppers to Maintain Growth',
    link: 'https://wwd.com/business-news/business-features/what-to-watch-luxury-china-h2-1235777441/',
    content: [
      `According to Morgan Stanley's estimate, around 1 percent of customers will account for as much as 40 percent of sales in some key luxury malls in China.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/WechatIMG8.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'How to Keep Employees Happy After a Merger',
    link: 'https://www.businessoffashion.com/articles/workplace-talent/when-companies-acquire-a-brand-they-should-think-about-the-employees/',
    content: [
      `The value of a newly acquired brand can plummet if the people who made it a creative and commercial force rush for the exits as soon as the deal closes.

      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/KE64I1X5H8PfuhDH04bRd7TSDA4=/1440x0/filters:format(jpg):quality(70):focal(914x434:924x444)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/FAE3MFP3PVFDDCOGJ7CRWBI7KI.jpg',
  },

  {
    title: 'Rolex SA to acquire luxury watch group Bucherer AG',
    link: 'https://fashionunited.uk/news/business/rolex-sa-to-acquire-luxury-watch-group-bucherer-ag/2023082571254',
    content: [
      `In a strategic move, Rolex has announced it will acquire Bucherer, the well-known watch retailer. Despite the acquisition, Bucherer will maintain its unique identity and operational independence. The integration is awaiting approval from competition authorities.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/25/rolex-bucherer-rue-de-rhone-eybnedv1-2023-08-25.jpeg',
  },

  {
    title: 'Retail’s Two-Track Approach to the Holiday Shopping Season    ',
    link: 'https://www.businessoffashion.com/briefings/retail/retails-two-track-approach-to-the-holiday-shopping-season/',
    content: [
      `The end of back-to-school season puts the focus on all-important holiday sales. Mixed signals on consumer spending make forecasters’ jobs even more complicated than usual. That, plus what else to watch for in the coming week.


      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/yplG8yGaW1vvtdmvSEUi4fIlTE4=/1440x0/filters:format(jpg):quality(70):focal(1269x201:1279x211)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/VVBCX5RPOJGTROG7T3OXV4H4AI.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Nearly 60 years after the men: Lacoste launches first underwear collection for women      ',
    link: 'https://fashionunited.uk/news/fashion/nearly-60-years-after-the-men-lacoste-launches-first-underwear-collection-for-women/2023082571240',
    content: [
      `The French fashion label Lacoste is expanding its product portfolio to include underwear for women. The 50-piece underwear line consists of four different collections in four different styles. However, they all reflect the brand's identity, Lacoste announced on Thursday.


      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/25/lacoste-db0jv4is-2023-08-25.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'EXCLUSIVE: Elle Fanning Debuts in Alexander McQueen Campaign With Naomi Campbell, Eva Green, Liu Wen',
    link: 'https://wwd.com/fashion-news/fashion-features/elle-fanning-stars-debut-alexander-mcqueen-campaign-1235776778/?cx_testId=10&cx_testVariant=cx_1&cx_artPos=0#cxrecs_s',
    content: [
      `The campaign was shot by David Sims and features Yseult, Eliott De Smedt, Karolina Spakowski and Momo Ndiaye.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Unknown-72.jpg?crop=0px%2C37px%2C1716px%2C960px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Luxury Brands Pushing the Upper Limit of What Makeup Can Cost',
    link: 'https://www.businessoffashion.com/articles/beauty/the-luxury-brands-pushing-the-upper-limit-of-what-makeup-can-cost/',
    content: [
      `Designer houses are marketing formerly disposable beauty products into collectibles, with prices to match. Welcome to the age of $500 lipstick.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/SZ6R5ZE0k2hiBNX7zhuH76EFdio=/1440x0/filters:format(jpg):quality(70):focal(596x1074:606x1084)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/QAY74LCCZJFCHLBLP3TJC64WTE.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'New Balance sues Golden Goose for copying ‘dad shoes’',
    link: 'https://fashionunited.uk/news/business/new-balance-sues-golden-goose-for-copying-dad-shoes/2023082571253',
    content: [
      `Boston-based sportswear giant New Balance has recently commenced legal proceedings against luxury Italian label Golden Goose. The lawsuit, filed in the US District Court for the District of Massachusetts last week, claims that Golden Goose has copied New Balance's signature Dad sn
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/25/lav-nb-4-6b3dlcfl-2021-08-11-h8bqytyi-2021-08-13-mhfrtwws-2023-08-25.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Can Technology Create a Better Off-Price Ecosystem?',
    link: 'https://www.businessoffashion.com/articles/technology/can-technology-create-a-better-off-price-ecosystem/',
    content: [
      `One start-up is trying to shake up the lucrative and entrenched off-price ecosystem by building an online marketplace to more efficiently connect sellers and buyers of retail’s excess inventory.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/lui2z6pVJiihdzpn_6dJRiBdO5c=/1440x0/filters:format(jpg):quality(70):focal(1371x83:1381x93)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/KHJJVA3NQZFPFEVS75MNZXF4VY.jpg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'EXCLUSIVE: Kendall Jenner Makes Her Stella McCartney Debut in Horse-inspired Campaign',
    link: 'https://wwd.com/fashion-news/fashion-scoops/exclusive-kendall-jenner-stella-mccartney-debut-campaign-1235774122/',
    content: [
      `The horses were provided by horse whisperer and rescuer, Jean-François Pignon, who has rescued, raised and trained them without any physical contact.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/OP23080_HW_STELLA_MCCARTNEY_Shot7_882_sRGB_OC.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Carla Sozzani Tapped for Dover Street Market’s Imminent Paris Opening: Sources',
    link: 'https://wwd.com/fashion-news/fashion-scoops/carla-sozzani-dover-street-market-paris-1235773324/',
    content: [
      `The retail emporium, billed as mold-breaking, is slated to open in March at 35-37 Rue des Francs-Bourgeois.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2021/03/hotel-coulanges-dover-street-market-paris-04.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The State of Luxury Resale',
    link: 'https://www.businessoffashion.com/opinions/luxury/the-state-of-luxury-resale/',
    content: [
      `The secondary market for luxury goods holds significant promise, but there are several key challenges to overcome, writes Luca Solca.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/QUI-FHNZFAGbSv8TDtFMMfpnpiM=/1440x0/filters:format(jpg):quality(70):focal(1025x552:1035x562)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/ZLZWYFU4NNFT7MOMPOV6AQQFYU.jpg',
  },

  {
    title: 'Everything Kate Middleton Has Worn in 2023',
    link: 'https://wwd.com/fashion-news/fashion-features/kate-middleton-outfits-1235669938/',
    content: [
      `From Alexander McQueen, Burberry, Stella McCartney, Erdem, Jenny Packham to Zara and Massimo Dutti.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/Unknown-62.jpg?crop=0px%2C0px%2C1716px%2C960px&resize=1000%2C563',
  },

  {
    title: 'Is Gap’s CEO ‘Kenough’ for Investors Seeking a Turnaround? ',
    link: 'https://www.businessoffashion.com/articles/retail/can-gaps-new-ceo-turn-the-company-around/',
    content: [
      `The apparel company is betting its new CEO, Richard Dickson, can emulate the success he found at Mattel.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/pxKOi04B8zEVQ_v5TWhO1A94KMU=/1440x0/filters:format(jpg):quality(70):focal(711x316:721x326)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/EHVA4VFR4BEEPP7XN75QHLJU7I.jpg',
  },

  {
    title:
      'Dior’s New Miami Home, Moschino Taps Young, Stella and Kendall Go for a Ride',
    link: 'https://wwd.com/fashion-news/fashion-scoops/diors-new-miami-home-moschino-taps-young-stella-kendall-go-for-a-ride-1235776236/',
    content: [
      `Dior Men has opened a Design District store, Moschino recruits Tiffany Young, Kendall Jenner is on horseback in Stella McCartney's latest ads.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/DIOR_Miami_Thomas_Trum_0401-Enhanced-NR-Edit_4K.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'Seven sustainable dogwear brands',
    link: 'https://fashionunited.uk/news/fashion/seven-sustainable-dogwear-brands/2023082371184',
    content: [
      `Dogs have long been humans’ trusty companions but what started as a purposeful hunting and guarding partnership has gone far beyond - over the millennia, dogs have slowly but surely moved from barns and hearths to living rooms and even bedrooms. 
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/23/screenshot-2023-08-23-at-09-06-27-syq9xhto-2023-08-23.png',
  },

  {
    title: 'Marc Jacobs Beauty Is Coming Back',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/marc-jacobs-beauty-is-coming-back-1235774381/',
    content: [
      `Marc Jacobs Beauty is set to make a comeback after the designer inked a licensing deal with Coty, its chief executive officer Sue Nabi revealed. Kendo, LVMH Moët Hennessy Louis Vuitton and Sephora’s beauty incubator launched Marc Jacobs’ Beauty in 2013, but it was discontinued in 2021 without any explanation. Now, Nabi told WWD, Coty ha ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2018/06/2018-mjb-pride-campaign_marc-jacobs.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'Moschino Names Tiffany Young Its New House Ambassador',
    link: 'https://wwd.com/fashion-news/fashion-scoops/tiffany-young-named-moschino-new-ambassador-1235774369/',
    content: [
      `The singer and actress is set to front the brand’s fall 2023 advertising campaign to be released this month.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Tiffany_Young-House_Ambassador_Korea.jpg?crop=0px%2C549px%2C1261px%2C707px&resize=1000%2C563',
  },

  {
    title: 'Fashion Looks to Art as Inspiration and Influence',
    link: 'https://wwd.com/fashion-news/fashion-trends/fashion-art-inspiration-muses-1235774711/',
    content: [
      `WWD has long celebrated fashion’s imaginative, innovative and sometimes controversial style muses. From the arts to culture, entertainment and people, we’re looking back at the muses that have kept fashion relevant in the cultural conversation.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/0085298944.original-1.jpg?crop=0px%2C878px%2C5314px%2C2973px&resize=1000%2C563',
  },

  {
    title: 'Why Versace Has Wiped Clean Its Instagram Account ',
    link: 'https://wwd.com/business-news/media/why-versace-wiped-clean-its-instagram-account-feed-1235775443/',
    content: [
      `Fresh start ahead at Versace? Only time will tell — or better, social media. The brand has wiped clean its official Instagram account, sparking speculation online over what might be next for the Italian fashion house, especially on the tail of the mega deal that saw Tapestry Inc. acquiring Versace’s parent company Capri Holdings for roug ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Versace-FW23-ADV-Campaign-Image-2-e1692719582146.jpg?crop=0px%2C50px%2C6340px%2C3547px&resize=1000%2C563',
  },

  {
    title:
      'MAC Cosmetics Gets In on ‘Skinification’ of Makeup With New Serum-powered Foundation',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/mac-cosmetics-makeup-serum-foundation-1235773545/',
    content: [
      `MAC Cosmetics is going big on skin — even when it comes to makeup. The brand’s new Studio Radiance Serum-Powered Foundation, $46, features an 80 percent serum base and aims to serve as the radiant-finish counterpart to the brand’s longstanding matte Studio Fix Fluid Foundation. The formula comes in 56 shades and taps 33 skin care ingred ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/MAC_StudioRadiance_ShadeLineUp_Group-3.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Naomi Campbell to Help Liberatum Brazil Celebrate Black Excellence',
    link: 'https://wwd.com/fashion-news/fashion-features/naomi-campbell-brazil-black-excellence-1235771753/',
    content: [
      `As part of its mission to empower communities in different parts of the world to foster greater diversity, equality and acceptance, Liberatum will be staging an event in Brazil to celebrate Black Changemakers and Black Visionaries, with Naomi Campbell as a headliner.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/GettyImages-1404734636-e1689091409309.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Battle of Britain’s Luxury Department Stores',
    link: 'https://wwd.com/business-news/business-features/battle-of-britains-luxury-department-stores-1235771698/',
    content: [
      `LONDON — British luxury department stores are having a seesaw summer. Harrods is up in the clouds with its 2022-23 financial results,
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2022/11/Dior-Holiday-Display-Harrods-JS-24-1.jpg?crop=0px%2C46px%2C2048px%2C1146px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'A Playbook for Michael Kors, Versace and Jimmy Choo',
    link: 'https://www.businessoffashion.com/opinions/luxury/a-playbook-for-michael-kors-versace-and-jimmy-choo/',
    content: [
      `How the American ‘accessible luxury’ group Tapestry can capitalise on its newly acquired brands and more from BoF’s Imran Amed.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/5TAAsaMwBhsqmx8QuD1pg6IQVrQ=/1440x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/MZHRWWC3KFFEVCW7Y42XE3ICNM.jpg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'First U.S. Indigenous Fashion Week Launching in Santa Fe, New Mexico',
    link: 'https://wwd.com/fashion-news/fashion-features/first-indigenous-fashion-week-launching-in-santa-fe-new-mexico-1235771597/',
    content: [
      `Following this weekend’s Southwestern Association for American Indian Arts, or SWAIA, fashion shows at Santa Fe Indian Market, showcasing designers
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/SWAIA-Staff-Portraits6222.jpg?crop=0px%2C439px%2C4925px%2C2760px&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Met’s Costume Institute to Spotlight Women Designers',
    link: 'https://wwd.com/fashion-news/fashion-scoops/the-mets-costume-institute-women-designers-1235771444/',
    content: [
      `In this age when identity is paramount to societal and political debate, the Metropolitan Museum of Art is gearing up to unveil “Women Dressing Women” at the Costume Institute.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/11.-EveningDressMadCarpentier1940s.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Peclers Paris: Tech gurus and urbanites to lead the way for SS24',
    link: 'https://fashionunited.uk/news/fashion/peclers-paris-tech-gurus-and-urbanites-to-lead-the-way-for-ss24/2023081671089',
    content: [
      `With the spring/summer 2024 buying season almost at its end, Peclers Paris wanted to offer some insight into what it believes will be dictating the upcoming period for those looking for  
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/15/ottolinger-f23-039-k78soc9h-2023-08-15.jpeg',
  },

  {
    title: 'What Zimmermann Did Right',
    link: 'https://www.businessoffashion.com/briefings/luxury/what-advent-and-zimmermann-got-right-with-1-billion-deal/',
    content: [
      `This week, the Australian label’s founders and private equity backers sold a majority stake to Advent International in a deal valuing the business at just over $1 billion at a time when others in the accessible luxury space have struggled to find buyers.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/_7FWQytqFy-w6EvP0dmXI4iPrxs=/1440x0/filters:format(jpg):quality(70):focal(834x258:844x268)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/B67R3HNVAFGUTD2AX565ATQCBA.jpg',
  },

  {
    title: 'Harrods Proves Itself With Annual Financial Results ',
    link: 'https://wwd.com/business-news/financial/harrods-proves-itself-2022-2023-financial-results-1235771056/',
    content: [
      `LONDON — Hurrahs are in order for Harrods as the luxury department store has recorded a 131.3 million pound increase in pretax profit, according to records
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2022/09/HarrodsExteriorFeb20-4a-2.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'Dolce & Gabbana co-founder tells young Sicilians to "go to work"',
    link: 'https://fashionunited.uk/news/fashion/dolce-gabbana-co-founder-tells-young-sicilians-to-go-to-work/2023081671090',
    content: [
      `In an outburst not unlike his previous controversial rants, Domenico Dolce, co-founder of Italian luxury house Dolce & Gabbana, on a visit to Sicily, opined its young generations are idle and lazy.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/16/afp-com-20181219-partners-035-bjl433099-highres-hs1xuytg-2022-12-29-wj0nbf0o-2023-08-16.jpeg',
  },

  {
    title:
      'Selfridges Enters Consultation Period, Looking to Save Cash and Reorganize Head Office',
    link: 'https://wwd.com/business-news/retail/selfridges-cuts-jobs-saves-spending-1235769727/',
    content: [
      `LONDON — Staff at Selfridges are undergoing a summer reshuffle as the luxury department store tries to reduce costs. Its new owners, Th
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2022/09/Selfridges-Good-Company-Corner-Shop_Tim-Charles-033.jpg?crop=0px%2C461px%2C4500px%2C2518px&resize=1000%2C563',
  },

  {
    title: 'Moncler, Billionaire Boys Club Drop Cobranded Collection',
    link: 'https://wwd.com/fashion-news/fashion-scoops/moncler-billionaire-boys-club-cobranded-collection-1235766240/',
    content: [
      `After teasing the collaboration on social media for the past week, the two brands are dropping the cobranded lineup which includes outerwear, layering pieces and accessories.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/MC_2023_FW_BBC_HERO_01_RGB_HD_4x5.jpg?crop=0px%2C3230px%2C12304px%2C6896px&resize=1000%2C563',
  },

  {
    title: 'China’s Retail Sales Growth Slows in July, Missing Expectations',
    link: 'https://wwd.com/business-news/government-trade/china-consumer-spending-down-july-2023-cars-cosmetics-apparel-1235769708/',
    content: [
      `As China battles with inflation woes, July’s economic data implied gloomy futures ahead. According to the National Bureau of Statistics, retail sales rose by 2.5
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/GettyImages-1600464510.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Louis Vuitton in Sicily, Reading With Dolly, Christian Lacroix’s New Bags',
    link: 'https://wwd.com/fashion-news/fashion-scoops/louis-vuitton-in-sicily-reading-with-dolly-parton-christian-lacroixs-new-bags-1235761524/',
    content: [
      `Vuitton has opened a cafe-boutique in Taormina, Dollar General donates to Dolly Parton's Imagination Library, Christian Lacroix and AHQ renew their partnership.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/LV-TAORMINA-19.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Balmain Lands in Atlanta, Reed Krakoff’s House Party, Ahrendts Gets a New Gig',
    link: 'https://wwd.com/fashion-news/fashion-scoops/balmain-lands-in-atlanta-reed-krakoffs-house-party-ahrendts-new-gig-1235763562/',
    content: [
      `Balmain has opened a store in Phipps Plaza, Reed Krakoff opens his house for a John Hardy party, Angela Ahrendts becomes an adviser to SKKY Partners.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Interior-6.jpeg?crop=195px%2C0px%2C9114px%2C5105px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Five Key Questions on Kering and Mayhoola’s Valentino Deal',
    link: 'https://www.businessoffashion.com/briefings/retail/five-key-questions-on-kering-and-mayhoolas-valentino-deal/',
    content: [
      `The French group will pay €1.7 billion for 30 percent of the Italian couture house as the first step in a broader partnership with owner Mayhoola. What will the deal mean for Kering, Valentino, Mayhoola and the wider fashion landscape?
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/VjoTX8g33CwIHPPGdXI4uP7tJQs=/1440x0/filters:format(jpg):quality(70):focal(799x182:809x192)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/5KADLG35DRB4HFFKQLXEWDDT2U.jpg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Dior to open month-long pop-up concept at Harrods',
    link: 'https://fashionunited.uk/news/retail/dior-to-open-month-long-pop-up-concept-at-harrods/2023080770970',
    content: [
      `Luxury label Dior is taking to Harrods for the final month of summer with a series of new pop-up concepts that are set to call the department store home over the period.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/07/dior-gift-shop-1v2-umw41m1w-2023-08-07.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'What Really Happens on a Tarte Influencer Trip',
    link: 'https://www.businessoffashion.com/articles/beauty/what-really-happens-on-a-tarte-influencer-trip/',
    content: [
      `For nearly a decade, the beauty brand has built its marketing around sending social media celebrities on lavish vacations, a practice that’s become increasingly controversial. 
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/Si5JhMid-g1t20bQwYtyrUVTDgM=/1024x0/filters:format(jpg):quality(70):focal(496x439:506x449)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/AKPHFSWI4FBCZHY5OZFZQNWXBQ.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Why Are So Many People Obsessed With Luxury Watch Prices?',
    link: 'https://www.businessoffashion.com/opinions/luxury/why-are-so-many-people-obsessed-with-luxury-watch-prices/',
    content: [
      `Bolstered by a Covid boom that has endured long after the lockdowns ended, expensive timepieces now experience the kind of hype 
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/9ZIpZIaxVls_Cfvt5E36G2dhJys=/1024x0/filters:format(png):quality(70):focal(494x779:504x789)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/JLGTDUTT7ZF4DBA7H4YULQFCZE.png',
  },

  {
    title: 'Zimmermann Sells Majority Stake to Advent International',
    link: 'https://wwd.com/fashion-news/designer-luxury/zimmermann-has-new-owners-private-equity-firm-advent-international-1235762764/',
    content: [
      `Advent International, one of the world’s largest private equity investors, has reached an agreement to acquire a majority stake in the company. Terms of the transaction weren’t disclosed. 
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/PORTRAIT_NICKY-SIMONE-ZIMMERMANN_HI_2.jpg?crop=0px%2C2744px%2C5464px%2C3056px&resize=1000%2C563',
  },

  {
    title: 'Loewe Opens Permanent Store in East Hampton',
    link: 'https://wwd.com/fashion-news/designer-luxury/loewe-unveils-permanent-store-in-east-hampton-1235754579/',
    content: [
      `The boutique carries women's ready-to-wear, bags, small leather goods, shoes, jewelry, home scents and sunglasses.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Loewe-East-Hampton-Finals-JPEG-1.jpg?crop=0px%2C94px%2C2048px%2C1146px&resize=1000%2C563',
  },
  {
    title:
      'The BoF Podcast | Francesca Bellettini on Managing Creativity, Customers and the Bottom Line',
    link: 'https://www.businessoffashion.com/podcasts/luxury/the-bof-podcast-francesca-bellettini-on-managing-creativity-customers-and-the-bottom-line/',
    content: [
      `Kering’s new deputy CEO of brand development shares her luxury brand management playbook in this archive interview with Imran Amed from BoF VOICES 2018.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/r9M4kaID1MTinfIcFNSgfNHQtDE=/1440x0/filters:format(png):quality(70):focal(863x352:873x362)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/F65KZQWIGBANLEUU2SPMFBDNOM.png',
  },

  {
    title:
      'Artist Ilana Savdie’s Whitney Museum Show Is a Vibrant Response to Dark Times',
    link: 'https://www.wmagazine.com/culture/ilana-savdie-paintings-whitney-museum',
    content: [
      `After over a decade of occupying shared spaces and closet-sized New York studios, Ilana Savdie finally has room to breathe. The painter’s new Bushwick loft, just a few blocks over from her last rental
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/12/f470693c-ed56-4295-b6da-db0e9d03df19-rs74798_savdie_018_anquilosis_hires.jpg?w=900&h=1257&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.3707&fp-y=0.3092',
  },
  {
    title:
      'Every Look From Beyoncé’s Renaissance Tour: From Custom Catsuits to Disco-Inspired Couture',
    link: 'https://www.wmagazine.com/fashion/beyonce-renaissance-tour-wardrobe-fashion-photos',
    content: [
      `Beyoncé’s Renaissance tour began with a bang in Stockholm and it hasn't slowed down since. The highly-anticipated show has featured inventive set design, a decades-spanning setlist, and a plethora 
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/8/7/ce42081d-035c-43ea-b25f-aeaf8a87cfff-snapinstaapp_365881772_809034617529624_4260114394811914365_n_1080.jpg?w=900&h=900&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5854&fp-y=0.3133',
  },
  {
    title:
      'AlineYaneli: A conversation on the creative process with founder Aline Skarule ',
    link: 'https://fashionunited.uk/news/fashion/alineyaneli-a-conversation-on-the-creative-process-with-founder-aline-skarule/2023080770975',
    content: [
      `AlineYaneli is a young denim brand with its origins in the heart of Europe. With each collection, the brand features only a handful of styles, ensuring that each piece is crafted to perfection. While the styles generally have one thing in common - being made of denim - each of them presents a unique design that caters 
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/07/img-4563-f3abjj6r-2023-08-07.jpeg',
  },
  {
    title: 'All-White Summer Outfits For the Hottest Days',
    link: 'https://www.wmagazine.com/fashion/all-white-summer-outfit-ideas',
    content: [
      `When temperatures hit the triple digits, a crisp monochrome look is the easiest way to stay cool.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/31/732efbfe-481d-4ebe-87b3-2d155e06407b-e4dc3a4d-3811-4dd5-b79b-e1a14bda5704-wm202303week03.jpeg?w=900&h=1153&fit=crop&crop=faces&auto=format%2Ccompress',
  },
  {
    title:
      'Rosé Shows Off the New Additions to Tiffany & Co.’s Lock Collection',
    link: 'https://www.wmagazine.com/fashion/best-fall-winter-2023-fashion-campaigns',
    content: [
      `Tracking the latest stars of fashion’s standout fall/winter 2023 campaigns.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/8/1/004dd191-9846-4891-8b13-44f5666cfe9b-rose.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5467&fp-y=0.2122',
  },
  {
    title: 'Kenzo chooses Shanghai for first ever show in China',
    link: 'https://fashionunited.uk/news/fashion/kenzo-chooses-shanghai-for-first-ever-show-in-china/2023080770971',
    content: [
      `Fashion houses are strategically expanding their outreach by showcasing their collections on both domestic turf and international stages, thereby tapping into broader and more diverse audiences.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/07/site-news-cover-kenzo-shanghai-2-2000x1100-y2v76rhj-2023-08-07.png',
  },
  {
    title: 'Are White Socks the Biggest Trend of the Summer?',
    link: 'https://www.wmagazine.com/fashion/white-socks-sandals-how-to-wear',
    content: [
      `There’s nothing revolutionary about the humble white tube socks. You (and everyone you know) probably has a half-dozen pairs in your dresser right now. So to say “white socks are the styling trend of the summer” 
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/28/3a31cea1-1a0a-45e4-aec9-500597d80ba2-trends_socks.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.508&fp-y=0.8507',
  },
  {
    title:
      'Self-Portrait taps Filippa Ks Calvin Baillie for product director role',
    link: 'https://fashionunited.uk/news/business/self-portrait-taps-filippa-k-s-calvin-baillie-for-product-director-role/2023080470937',
    content: [
      `Womenswear label Self-Portrait is understood to have poached former Filippa K buying, merchandising and planning director Calvin Baillie to the role of product director.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/04/self-portrait-aw23-campaign-gigi-hadid-copyrightself-portrait-tyrone-lebon-01-press-logo-ow6vpnwy-2023-08-04.jpeg',
  },
  {
    title: 'This Eye Mask Is a Wearable Blackout Shade ',
    link: 'https://www.wmagazine.com/life/drowsy-eye-mask-sleep-review',
    content: [
      `The first thing you need to know about the Drowsy silk eye mask is that it costs an astounding $79. The second thing you need to know is that it’s worth every penny.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/13/cf1ba2ad-1c1c-4baf-8c8e-5e22f16f9cbd-wselects_drowsy.jpg?w=1440&h=903&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5093&fp-y=0.4926',
  },
  {
    title:
      'Mulberry issues upbeat outlook driven by international retail sales',
    link: 'https://fashionunited.uk/news/business/mulberry-issues-upbeat-outlook-driven-by-international-retail-sales/2023080470944',
    content: [
      `British accessories brand Mulberry has posted a positive outlook on its current trading for the first 12 weeks of the financial year, during which time its revenues were reported to be 6 percent ahead of the year prior.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/04/battersea-copyright-michael-franke-img-3079-03-9t13rico-2022-10-28-8a5sjtw1-2022-11-30-xfemir1b-2023-02-14-6yf9vrww-2023-08-04.jpeg',
  },
  {
    title: 'An Art Lover’s Guide to Arles',
    link: 'https://www.wmagazine.com/culture/arles-france-travel-guide-art',
    content: [
      `Everything to know about visiting the French city, which becomes a cultural cornucopia come summertime.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/26/3b9631a1-d6f6-422e-88b7-44b57612c198-c-adrien-limousin_dsc5607.jpg?w=900&h=1347&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.52&fp-y=0.707',
  },
  {
    title: 'Ferragamos turnaround is taking longer than expected',
    link: 'https://fashionunited.uk/news/business/ferragamo-s-turnaround-is-taking-longer-than-expected/2023080470954',
    content: [
      `In March of this year, Italian luxury footwear artisan Salvatore Ferragamo publicly communicated its strides of an intricate turnaround strategy. Though the 10.8 percent contraction in its operating profit for the fiscal year 2022 was somewhat less severe
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/08/04/ferragamo-f23-068-38bi1m6p-2023-03-03-xujephhv-2023-08-04.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Miuccia Prada Talks 30 Years of Miu Miu, Her Greatest Experiment',
    link: 'https://www.wmagazine.com/fashion/miuccia-prada-profile-interview-miu-miu-kendall-jenner',
    content: [
      `There are many things that Miuccia Prada hates: The banality of luxury, “good taste,” and the bourgeoisie are just a few of the topics that come up during a conversation from her 
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/5/5/2763589d-5514-4c28-97bd-f76767e7b825-wm202303miu07.jpg?w=768&h=1023&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4813&fp-y=0.1612',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Burberry Reimagines Its Signature Plaid in New Colors and Shapes',
    link: 'https://www.wmagazine.com/fashion/resort-2024-fashion',
    content: [
      `True to its name, the resort (also known as cruise) season inspires peak wanderlust. The feeling is only made greater by the fact that luxury houses often present their pre-season collections in cinematic destinations across the globe. For its part, Chanel took the idea of “cinematic” quite literally, kicking off the season with a splashy show staged at Los Angeles’s Paramount Studios. On May 9, Virginie Viard unveiled her sartorial ode to Hollywood against the backd
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/29/74328baa-bea1-4a22-8131-857eb7a17fe2-burberry_spring_24_lookbook_look_15.jpg?w=900&h=1350&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4987&fp-y=0.2284',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Resort SS24 collections: denim goes dark and cleans up',
    link: 'https://fashionunited.uk/news/fashion/resort-ss24-collections-denim-goes-dark-and-cleans-up/2023072170662',
    content: [
      `As the Resort 24 season draws to a close, certain strong design signals have emerged. Denim continues its ascent as one of the most prominent fabrics used by the higher end designers. Among the more predictable pale washes and ripped up details, a 
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/13/denim-main-copy-1mga8xhw-2023-06-13.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Duke + Dexter to be backed by Venrex BFC Fashion I fund',
    link: 'https://fashionunited.uk/news/business/duke-dexter-to-be-backed-by-venrex-bfc-fashion-i-fund/2023072170675',
    content: [
      `London-based brand Duke + Dexter has been named as one of the first to participate in the Venrex BFC Fashion I initiative, an investment fund launched last year by the British Fashion Council (BFC) and venture capital firm Venrex.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/21/dd-aw22-playboy-gorals-58-4y2d04wm-2023-07-21.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Grace Wales Bonner to curate an exhibition at MoMA',
    link: 'https://fashionunited.uk/news/culture/grace-wales-bonner-to-curate-an-exhibition-at-moma/2023071970624',
    content: [
      `The Museum of Modern Art (MoMA) in New York has announced that London-based fashion designer Grace Wales Bonner will curate an exhibition opening in November.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/19/500-1996-cr-press-site-2000x1350-wficbenv-2023-07-19.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Fashion house Aelis upcycling tutus for Paris Opera',
    link: 'https://fashionunited.uk/news/culture/fashion-house-aelis-upcycling-tutus-for-paris-opera/2023070670412',
    content: [
      `Ecology-focused couture brand Aelis announced a partnership with the Paris Opera to upcycle tutus into bespoke dresses and new costumes at its fashion week show on Thursday.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/06/aelis-hc-f23-025-063589i4-2023-07-06.jpeg',
  },

  {
    title: 'Inside the "Karl Lagerfeld: A Line of Beauty" Exhibit at the Met',
    link: 'https://fashionunited.uk/news/culture/inside-the-karl-lagerfeld-a-line-of-beauty-exhibit-at-the-met/2023062170138',
    content: [
      `The Costume Institute’s “Karl Lagerfeld: A Line of Beauty”, the ongoing exhibition at the Metropolitan Museum of Art, is an ode to the near-seven decade career of the late German designer. It is currently on view until July 16.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/21/1-titlewall-hwuyxlq7-2023-06-21.jpeg',
  },

  {
    title:
      '‘Oppenheimer’ Costume Designer Ellen Mirojnick Talks Creating a Different Kind of Period Film',
    link: 'https://wwd.com/menswear-news/mens-fashion/oppenheimer-costumes-ellen-mirojnick-breakdown-1235751008/',
    content: [
      `While the film spans several decades of the early and mid-20th century, Mirojnick focused on aiding the movie’s immersive experience rather than creating period costumes.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/GF-03120_MSG.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    title: 'EXCLUSIVE: Dior Goes Gray for Fall Men’s Campaign',
    link: 'https://wwd.com/business-news/media/exclusive-dior-goes-gray-for-fall-mens-campaign-kim-jones-1235750917/',
    content: [
      `RIVER CRUISE: The soft silhouettes of Dior’s fall men’s collection are presented against a moody gray backdrop — Christian Dior’s signature color — in the images for the fall men’s campaign. The collection’s touchstone was water, namely London’s Thames and Paris’ Seine rivers, meant to reflect the idea of movement as conceived by creativ ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/DIOR-MENS-WINTER-2023-2024-ADVERTISING-CAMPAIGN-BY-RAFAEL-PAVAROTTI-7.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Is This Luxury’s New Normal? ',
    link: 'https://www.businessoffashion.com/briefings/luxury/is-this-luxurys-new-normal/',
    content: [
      `LVMH, Kering and Prada are among the companies who will seek to reassure the market this week after mixed-bag earnings resulted in a luxury sell-off. That, plus what else to watch for in The Week Ahead.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/aQxmB0AyCQ2aV6xZdxI3_G1mmo4=/1440x0/filters:format(jpg):quality(70):focal(988x603:998x613)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/N6T67B6MDBF6NHN5HL3RICB434.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Estée Lauder Cos. Finds Cybersecurity Breach ',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/estee-lauder-cybersecurity-breach-1235747643/',
    content: [
      `An unauthorized third party gained access to some of the company's systems, the company said.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2022/03/Estee-Lauder-at-MVFW-2.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Immaterial Needs Drive Purchases of Luxury Goods — and NFTs, Too',
    link: 'https://wwd.com/business-news/technology/luxury-goods-psychology-buying-motivation-1235729188/',
    content: [
      `Neuromarketing consultancy Beyond Reason has found that "our need to have power over others" is the chief immaterial goal.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/OT2021.png?crop=0px%2C585px%2C1436px%2C805px&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Best Nordstrom Anniversary Sale Fashion Deals to Shop Now',
    link: 'https://www.wmagazine.com/fashion/best-of-nordstrom-anniversary-sale-clothes-accessories',
    content: [
      `The Nordstrom Anniversary sale, which runs from July 17th through August 7th on Nordstrom.com, hits the shopping sweet spot. There’s just enough summer left to get plenty of wear out of warm
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/13/31b70d0c-c565-47f5-8473-fc40c5c4ea9e-nordstromsale2.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5027&fp-y=0.194',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Harrods to open first private members’ club in Shanghai',
    link: 'https://fashionunited.uk/news/business/harrods-to-open-first-private-members-club-in-shanghai/2023071870602',
    content: [
      `Luxury department store Harrods is targeting the ultra-rich in China with its first-ever private members’ club, which will open in Shanghai, complete with an exclusive Gordon Ramsay restaurant.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/18/2021-01-07-harrods-0388-t-t25f5qhu-2023-07-18.jpeg',
  },

  {
    title: 'EXCLUSIVE: Lanvin Unveils New Store Concept on Madison Avenue',
    link: 'https://wwd.com/fashion-news/designer-luxury/lanvin-madison-avenue-boutique-1235737938/',
    content: [
      `Lanvin’s latest boutique on New York’s Madison Avenue introduces a new pared-down design concept that subtly references Art Deco and Neoclassical design. The 2,150-square-foot unit at No. 855, which opens to the public on Thursday, marks the latest step in an aesthetic reset initiated last year, and the first step in a measured retail ex ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/GLC07617.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title:
      'Carolina Herrera to Expand Retail Footprint With New Palm Beach Store',
    link: 'https://wwd.com/fashion-news/designer-luxury/carolina-herrera-broadens-retail-footprint-with-new-palm-beach-store-to-open-in-fourth-quarter-1235745974/',
    content: [
      `The 2,200-square-foot store will feature ready-to-wear, beauty and accessories, including handbags, shoes and jewelry.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/CHNY-Palm-Beach_Ext.jpg?crop=0px%2C38px%2C3555px%2C1989px&resize=1000%2C563',
  },

  {
    title: 'Cartier Taps BTS’ Kim Taehyung as Global Brand Ambassador',
    link: 'https://wwd.com/fashion-news/designer-luxury/cartier-taps-bts-kim-taehyung-brand-ambassador-1235747713__trashed-1235747713/',
    content: [
      `PARIS – Cartier has tapped K-pop superstar Kim Taehyung – aka V, from BTS – as its newest global brand ambassador. With the announcement, Kim debuted as the face of the jewelry brand’s newest campaign for its Panthère line. He appears in photos in a red suit jacket, decked out in a sculptural diamond ring, tête-à-tête panther bracelet, t ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/PANTHERE-FIG-MEN_4x5_300DPI.jpg?crop=0px%2C336px%2C2835px%2C1589px&resize=1000%2C563',
  },

  {
    title: 'Ralph Lauren to Keep Raising Prices in Brand Elevation Push',
    link: 'https://www.businessoffashion.com/news/luxury/ralph-lauren-raising-prices-brand-prestige/',
    content: [
      `CEO Patrice Louvet said the American label was doubling down on efforts to boost the cachet of its brands and eyeing expansion in India.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/kTisTykMRRS6JY2CUXq6lXJlQtI=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/72PLZHX745CXJPMVWVTQQH4DV4.jpg',
  },

  {
    title: 'ThredUp teams up with ‘Barbie’ costume designer Jacqueline Durran',
    link: 'https://fashionunited.uk/news/fashion/thredup-teams-up-with-barbie-costume-designer-jacqueline-durran/2023071970630',
    content: [
      `ThredUp, one of the world's largest online resale platforms, has partnered with Academy Award-winning costume designer Jacqueline Durran on an exclusive #Barbiecore Dream Shop experience.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/19/barbiecore-dream-shop-hero-image-rectangle-5kq3gxkm-2023-07-19.jpeg',
  },

  {
    title:
      'Kering Executive Shake-up: Marco Bizzarri exits Gucci, Saint Laurent chief appointed group head of brands',
    link: 'https://fashionunited.uk/news/people/kering-executive-shake-up-marco-bizzarri-exits-gucci-saint-laurent-chief-appointed-group-head-of-brands/2023071870611',
    content: [
      `In a significant strategic manoeuvre, Italian luxury house Gucci has announced the imminent departure of its CEO, Marco Bizzarri, who is set to bid farewell to the brand in September.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/18/bizzarri-j1kap3ql-2021-11-09-7977if0e-2023-07-18.jpeg',
  },

  {
    title:
      'Gisele Bündchen’s Red Carpet Beauty Moments: From the Met Gala to Victoria’s Secret',
    link: 'https://www.wmagazine.com/beauty/gisele-bundchen-hair-makeup-beauty-red-carpet',
    content: [
      `As one of the most celebrated supermodels of all time, Gisele Bündchen has cemented herself as regular on the red carpet and in the pages of glossy magazines. And throughout her career, the Brazilian
      `,
    ],

    image:
      'https://imgix.bustle.com/wmag/2018/07/19/5b50ef2dfd9af80b5ad41071_gisele_red_carpet.jpg?w=900&h=600&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4787&fp-y=0.626',
  },

  {
    title: 'Selfridges turns pink with Barbie-inspired activations ',
    link: 'https://fashionunited.uk/news/retail/selfridges-turns-pink-with-barbie-inspired-activations/2023071870600',
    content: [
      `Destination Barbie has landed at luxury department store Selfridges in London, with several exclusive Barbie-inspired activations, from Barbie at The Corner Shop, a pop-up in The Toy Shop, and windows featuring official costumes from the upcoming Barbie movie.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/18/barbie-at-the-selfridges-corner-shop-shot-by-lewis-ronald-4-3tejlcn3-2023-07-18.jpeg',
  },

  {
    title: 'Digital Fashions Are Entering a New Era',
    link: 'https://wwd.com/business-news/technology/digital-fashions-potential-draup-rstlss-1235729280/',
    content: [
      `Now that speculative NFT buyers have left the chat, Draup and Rstlss are fine-tuning their collections, and storytelling.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-10-at-1.51.37-PM.png?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'Richemont Drops on Signs Luxury Demand Falling in US, China',
    link: 'https://www.businessoffashion.com/articles/luxury/richemont-shares-drop-7-percent-as-us-revenue-declines/',
    content: [
      `The Swiss luxury goods group reported quarterly sales that raised concerns over how weak the US and China markets might get.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/2jknZzB1_J0LGvvd5ZgaspBfXvI=/1800x0/filters:format(jpg):quality(70):focal(802x670:812x680)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/A5ULZTSTEFF2LOPAJBURCFIDDM.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Jane Birkin, Actress, Singer and Style Icon Has Died at 76',
    link: 'https://www.wmagazine.com/culture/jane-birkin-death-france',
    content: [
      `Jane Birkin, the British-born, French actress, singer and style icon who rose to fame in the late 1960s and inspired the Hermès Birkin bag, passed away on Sunday at the age of 76. French President Emmanuel
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/getty/2023/7/16/0e6cf9ab-82d5-44ef-92fe-de33513eec4c-getty-1327633800.jpg?w=864&h=658&fit=crop&crop=faces&auto=format%2Ccompress',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Kering’s François-Henri Pinault believed to be eyeing CAA acquisition',
    link: 'https://fashionunited.uk/news/culture/kering-s-francois-henri-pinault-believed-to-be-eyeing-caa-acquisition/2023071770571',
    content: [
      `François-Henri Pinault, the chief executive officer of luxury fashion house Kering, is believed to be in “advanced” discussions to acquire a majority stake in Hollywood talent agency Creative Artists Agency (CAA).
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/17/2-comunicato-4pqvw1cn-2023-05-25-v53nqjj5-2023-07-17.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Richemont Sales Climb 14% in Q1 as Chinese Demand Flourishes',
    link: 'https://wwd.com/business-news/financial/richemont-sales-climb-14-q1-amid-flourishing-demand-china-1235745109/',
    content: [
      `The luxury giant saw double-digit growth in mainland China and triple-digit growth in Hong Kong and Macau, while sales in the Americas fell by 2 percent in the first fiscal quarter.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/05/Golshifteh-Farahani.jpg?crop=0px%2C118px%2C1638px%2C918px&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'China GDP Grew 6.3% In the Second Quarter, Retail Growth Slowed Sharply in June',
    link: 'https://wwd.com/business-news/government-trade/china-gdp-second-quarter-1235745101/',
    content: [
      `China announced that second-quarter GDP registered 6.3 percent year-over-year growth. The latest figure, announced Monday morning, missed analysts’ estimate of 7.3 percent, according to a Reuters poll of economists, and marked a 0.8 percent growth from the previous quarter, slower than the 2.2 percent quarterly growth rate seen in the fi ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/GettyImages-1259148782.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Sotheby’s to Sell Revealing Letters About Diana’s Black Sheep Sweater',
    link: 'https://wwd.com/fashion-news/fashion-features/sothebys-sell-revealing-letters-about-dianas-black-sheep-sweater-1235741559/',
    content: [
      `FEELING SHEEPISH: Princess Diana’s red, white and black sheep sweater is going under the Sotheby’s hammer in September, and if that was not enough to make royal watchers swoon, there’s more memorabilia to come.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2020/10/rowing-blazers-women-01.jpg?crop=0px%2C300px%2C1348px%2C754px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Ralph Lauren partners with G2 Esports on collaborative collection',
    link: 'https://fashionunited.uk/news/culture/ralph-lauren-partners-with-g2-esports-on-collaborative-collection/2023071770566',
    content: [
      `Premium fashion brand Ralph Lauren has once again dipped its toes into the gaming world, now in a new collaboration with G2 Esports, a European entertainment agency.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/17/g2-x-ralph-lauren-animation-2-gvm76cti-2023-07-17.jpeg',
  },

  {
    title:
      'Gen Z May Be in for Traditional Suiting, According to Textile Makers',
    link: 'https://wwd.com/fashion-news/textiles/gen-z-embracing-traditional-tailoring-textile-makers-milano-unica-1235744106/',
    content: [
      `MILAN — Gen Zers in a full suit? Unexpected but likely, judging from the fall 2024 textile collections on show at the three-day trade fair Milano Unica. Temporarily held inside bigger pavilions at the Rho-Fiera fairgrounds, the show spotlighted how the quiet luxury trend — whether real or made up by TikTok content creators — is showing m ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/Milano_Unica_37_0001.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title:
      'Italian Fashion Groups Set Aside Rivalries to Preserve ‘Made in Italy’',
    link: 'https://www.businessoffashion.com/articles/luxury/prada-zegna-set-aside-rivalries-to-keep-it-local/',
    content: [
      `Prada, Zegna and others have started teaming up to protect their supply chains, showing a new spirit of collaboration.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/UIfXuxoRQbAY4DjHwbMkZnjtsgI=/1800x0/filters:format(jpg):quality(70):focal(751x511:761x521)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/BZXPHJGIGFHATAI5WZXK3AAKXA.jpg',
  },
  {
    title: 'Christie’s, Gucci Explore Generative Art and Fashion',
    link: 'https://wwd.com/fashion-news/designer-luxury/christies-gucci-explore-generative-art-fashion-1235743907/',
    content: [
      `A collaborative auction, "Future Frequencies: Explorations in Generative Art and Fashion," will run from July 18-25 and showcase 21 NFTs by digital artists.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/SufficeNuance.jpg?w=720&h=563&crop=1',
  },
  {
    title: 'Fashion’s IPO Window Is Cracking Open — But Only for Some',
    link: 'https://www.businessoffashion.com/briefings/beauty/fashions-ipo-window-is-cracking-open-but-only-for-some/',
    content: [
      `Il Makiage owner Oddity Tech’s stock-market debut could be the start of a wave of fashion and beauty listings. That, plus what else to watch for in the coming week.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/uuPbIo7gAOJBtlYzWsbbbeACmEY=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/UL6MCEOGZFBU5IKZXN5T7LWVXE.jpg',
  },
  {
    title: 'How Inflation Changed Fashion',
    link: 'https://www.businessoffashion.com/briefings/retail/how-inflation-changed-fashion/',
    content: [
      `US consumer prices rose at their slowest pace in two years in June, potentially bringing to a close a period that changed how many fashion brands value their goods.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/5appt22ZAZ1O8UP3xvupbWN2Cz0=/1024x0/filters:format(jpg):quality(70):focal(2033x4410:2043x4420)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/KKF5ZGFY4RDEHGRNBMJWWNVTT4.jpg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Ganni and Polybion unveil new bacterial cellulose-made blazer',
    link: 'https://fashionunited.uk/news/fashion/ganni-and-polybion-unveil-new-bacterial-cellulose-made-blazer/2023071370548',
    content: [
      `Danish fashion brand Ganni has teamed up with Polybion to create a new bio-leather blazer made entirely from Celium™, a new material made from bacterial cellulose.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/13/copia-de-ganni-asset-65z61nux-2023-07-13.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Fall 2024 Couture Trend: Tailoring',
    link: 'https://wwd.com/fashion-news/fashion-trends/couture-precision-tailoring-paris-1235742425/',
    content: [
      `Draped evening gowns came out in full force during Paris Couture Week, but the true muscle of the city’s most impressive ateliers was flexed with the season’s precision tailoring.  At Jean Paul Gautlier, guest designer Julien Dossena played on the house founder’s love of clashing together masculine and feminine elements by linking the ta ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/jean-paul-gaultier-couture-fall-2023-paris-002.jpeg?crop=0px%2C86px%2C1364px%2C764px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Gucci tops Fashion Transparency Index, Savage X Fenty lands at bottom',
    link: 'https://fashionunited.uk/news/business/gucci-tops-fashion-transparency-index-savage-x-fenty-lands-at-bottom/2023071470551',
    content: [
      `The fashion industry still has a “long way to go” when it comes to tackling global inequality and the climate crisis. That is the conclusion that Fashion Revolution made based on the latest edition of the annual Fashion Transparency Index. 
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/14/20191112-eurotex-225-qyksci1b-2023-07-13-g50ql20b-2023-07-14.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Kim Kardashian’s Skims Chasing $4 Billion Valuation in Pre-IPO Round',
    link: 'https://wwd.com/business-news/financial/kim-kardashian-skims-fundraise-pre-ipo-4-billion-1235741156/?cx_testId=10&cx_testVariant=cx_1&cx_artPos=0#cxrecs_s',
    content: [
      `Sources said the mega influencer’s brand is in the process of raising fresh funds from mutual funds and family offices in a prelude to an offering.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/SKIMS_StevenKlein_3-1.jpg?crop=42px%2C10px%2C1114px%2C624px&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Dior’s Reprised Shenzhen Show Garners More Than 130 Million Views Online',
    link: 'https://wwd.com/fashion-news/fashion-features/diors-reprised-shenzhen-show-1235743462/',
    content: [
      `SHENZHEN, China — Dior‘s reprised women’s 2023 fall runway collection in Shenzhen was not only the LVMH Moët Hennessy Louis Vuitton-owned luxury powerhouse’s most important event in China
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/USP_5843.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Burberry’s Q1 comparable sales up 18 percent, maintains outlook',
    link: 'https://fashionunited.uk/news/business/burberry-s-q1-comparable-sales-up-18-percent-maintains-outlook/2023071470550',
    content: [
      `Burberry’s first quarter comparable store sales increased 18 percent, while retail revenue increased 17 percent reported and 19 percent at currency FX to 589 million pounds.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/14/burberry-refurbished-global-flagship-store-on-new-bond-street-image-3-courtesy-of-burberry-yfgvk74d-2023-07-14.jpeg',
  },

  {
    title: 'Margot Robbie Perfects the Corset Dress In a ‘Barbie’ Way',
    link: 'https://www.wmagazine.com/fashion/margot-robbie-dilara-findikoglu-red-corset-dress-barbie-london',
    content: [
      `Margot Robbie is the ultimate Barbie girl. And judging by her recent string of doll-inspired looks, we’re all just living in her world. The Australian actress has taken the aesthetics of her titular very seriously throughout the film’s seemingly 
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/getty/2023/7/13/5d8db262-8008-48be-b371-97c9d4f4c380-getty-1537998464.jpg?w=900&h=1313&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.476&fp-y=0.2338',
  },

  {
    title: 'La Perla understood to have paid off majority of outstanding debts',
    link: 'https://fashionunited.uk/news/business/la-perla-understood-to-have-paid-off-majority-of-outstanding-debts/2023071370533',
    content: [
      `Lingerie brand La Perla was faced with a spot of trouble earlier this week when it was revealed the label was facing a series of winding-up petitions filed by creditors.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/23/laperla1-ms0sgpbj-2023-06-23.jpeg',
  },

  {
    title: 'Couture Corsets Grace the Fall 2023 Runways',
    link: 'https://wwd.com/fashion-news/fashion-trends/couture-corsets-chanel-viktor-rolf-jean-paul-gaultier-thom-browne-mohammed-ashi-1235740847/',
    content: [
      `Models were laced-up and cinched-in at the Paris couture shows this season as corseted looks continued to dominate on the runway.  For centuries the corset was used to constrict the female form, but for fall 2023, designers let loose, metaphorically of course, using corsets as a base for whimsical silhouettes.  One of these was Texan Da ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/schiaparelli-couture-fall-2024-paris-009-GG.jpeg?crop=0px%2C110px%2C1364px%2C764px&resize=1000%2C563',
  },

  {
    title:
      'Princess Diana As Androgynous Icon? Silvia Prada’s “Obsessions” Digs Into Her Queer Significance ',
    link: 'https://www.wmagazine.com/culture/princess-diana-queer-silvia-prada-obsessions',
    content: [
      `What does Princess Diana’s icy glare have to do with bars of Calvin Klein Obsession soap and a horde of cheesy men’s clothing catalogs riddled with beefcake models found in a Washington D.C.’s
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/13/8fcf09ee-509b-484c-ba86-2dfa54dc52b9-di2.jpg?w=900&h=1156&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4573&fp-y=0.3994',
  },

  {
    title: 'How to Wear Hot Pink Makeup, According to 8 Celebrity MUAs',
    link: 'https://www.wmagazine.com/beauty/best-hot-pink-makeup-barbie-lipstick-blush-highlighter-eye-shadow',
    content: [
      `Call it the Barbie effect. Bold shades of hot pink are not only dominating the runways and red carpets this summer, but the hue is also making its way into the realm of makeup. While previously the trendcarried 
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/13/669724a2-d2ad-47cd-8fd9-68c7db7665ce-barbiemakeup-1.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4573&fp-y=0.2676',
  },

  {
    title: 'What Happens After Founders Step Aside',
    link: 'https://www.businessoffashion.com/articles/workplace-talent/what-happens-after-founders-step-aside/',
    content: [
      `For brands engineered by larger-than-life visionaries, like Savage x Fenty or Ralph Lauren, the first leadership transition can be complicated — but eventually rewarding.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/0F3DKAkqTPlH4D2wwKb9vbzwP-4=/1024x0/filters:format(jpg):quality(70):focal(687x402:697x412)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/YETF4MD3YJHIZEA2T2ULZMNRK4.jpg',
  },

  {
    title: 'How Jane Birkin Changed ‘French Girl’ Style Forever',
    link: 'https://www.businessoffashion.com/articles/luxury/how-jane-birkin-changed-french-girl-style-forever/',
    content: [
      `The British French actress and singer, who died on Sunday, embodied changing ideas of femininity and influenced fashion far beyond the Hermès bag that famously bears her name.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/YV9gPw4EU0DkvnI7XfDvYa7tZ6Y=/1024x0/filters:format(jpg):quality(70):focal(1483x1915:1493x1925)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/X2YE6SL7WFEA7MB3ZIYNJLQUSI.jpg',
  },

  {
    title: 'Modern Age Adds Fertility Screening to Aging Wellness Assessment',
    link: 'https://wwd.com/beauty-industry-news/wellness/modern-age-adds-fertility-screening-1235741141/',
    content: [
      `At Modern Age, fertility is the next frontier. The New York-based wellness center is adding fertility screening to its flagship Aging Wellness Assessment, which retails for $500, a comprehensive health analysis that looks at blood markers, brain function, subjective age, metabolic health and bone density. This marks the first extension o ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/Modern-Age-Studio_Reception.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'What Fashion Retail Professionals Need to Know Today ',
    link: 'https://www.businessoffashion.com/articles/retail/careers-market-insights-industry-news-fashion-retail/',
    content: [
      `BoF Careers provides essential sector insights for fashion professionals in retail this month, to help you decode fashion’s retail landscape.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/ER14zgWLRYwNDSx_ZWLMEtez2SI=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/KEDPJZVMBRDCZJU5NCQTDQ3U44.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Manolo Blahnik to Open Larger Shop Inside Japan’s Hankyu Umeda Department Store',
    link: 'https://wwd.com/fashion-news/fashion-scoops/manolo-blahnik-japan-hankyu-umeda-department-store-1235740166/',
    content: [
      `This new shop-in-shop marks the first time Blahnik’s men’s and women’s collections are presented side-by-side at the retailer.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/04/Andrew-Kwon-Bridal-S24-Manolo-Blahnik-09.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Is Fashion’s Buy-Now, Pay-Later Boom Over? ',
    link: 'https://www.businessoffashion.com/articles/technology/is-fashions-buy-now-pay-later-boom-over/',
    content: [
      `Instalment payment services helped fuel sales for years. But high interest rates could soon have shoppers pulling back.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/lkQyAA2R-gVDUlkltW3LZWGZRVE=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/KYBCMFSEPFA4HDDV6GTTVJTBWI.jpg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Dior elevates sneaker authenticity with Digital Twin and NFT integration ',
    link: 'https://fashionunited.uk/news/fashion/dior-elevates-sneaker-authenticity-with-digital-twin-and-nft-integration/2023071170494',
    content: [
      `Dior has unveiled its latest B33 sneaker drop, accompanied by a cutting-edge digital twin. In a move to enhance the footwear's authenticity, the French luxury house has embedded an NFC chip beneath the sole of the right shoe. This innovative feature provides
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/11/1687776382-3sn303zwv-h650-e12-zh-q36x1v3r-2023-07-11.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Bulgari Faces Boycott in China for Taiwan Listing Blunder',
    link: 'https://wwd.com/fashion-news/fashion-scoops/bulgari-collaboration-boycott-china-1235739691/',
    content: [
      `The fallout came a day after the jewelry label revealed a digital collaboration with Honor of Kings, one of China's biggest video games.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/bulgari-1.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Quiet Luxury Takes Couture',
    link: 'https://wwd.com/fashion-news/fashion-trends/quiet-luxury-couture-fendi-dior-vauthier-1235729780/',
    content: [
      `Throughout the fall 2023 couture season, designers focused on clean lines, monochromatic dressing, elongated silhouettes and a minimalist aesthetic.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/Christian-Dior-couture-fall2023.jpeg?crop=0px%2C142px%2C681px%2C382px&resize=681%2C383',
  },

  {
    title:
      'Inside Dolce & Gabbana’s Alta Moda Extravaganza With Kim Kardashian and More',
    link: 'https://www.wmagazine.com/fashion/dolce-gabbana-alta-moda-celebrity-photos',
    content: [
      `For a few hundred of the world’s most avid—and fortunate—followers of fashion, the Dolce & Gabbana Alta Moda long weekend is a highlight of 
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/10/74477975-c4e0-4011-8b96-fb87d824f6a6-kim-kardashian.jpg?w=900&h=1350&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5053&fp-y=0.3884',
  },

  {
    title: 'Gucci receives certification for gender parity in Italy',
    link: 'https://fashionunited.uk/news/business/gucci-receives-certification-for-gender-parity-in-italy/2023071170485',
    content: [
      `Gucci has become the first Italian luxury fashion house to receive a certification for gender parity in Italy, as outlined in the Italian government’s National Recovery and Resilience Plan.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/11/gucciok2-lqjncmb3-2023-07-10-hl90npc6-2023-07-11.jpeg',
  },

  {
    title: 'Why So Many Brands Want to Expand Into the UK Right Now',
    link: 'https://www.businessoffashion.com/articles/retail/why-so-many-brands-want-to-expand-into-the-uk-right-now/',
    content: [
      `Britain’s cost of living crisis continues to escalate. Yet a number of brands still see ample opportunity in the market. Why?
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/6nBLr_7l-n_qFIqOqRWKe73g-tc=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/BBHUOVXLEVEZXCVNTV4ZGGVB74.jpg',
  },

  {
    title:
      'Gigi Hadid Returns for Self-Portrait, Kirsten Dunst and Coach Collaborate ',
    link: 'https://wwd.com/fashion-news/fashion-scoops/gigi-hadid-returns-for-self-portrait-kirsten-dunst-coach-collaborate-1235740587/',
    content: [
      `GIGI, PART DEUX: Gigi Hadid’s collaboration with Self-Portrait continues, as she appears in the brand’s latest fall 2023 campaign shot in Paris by British photographer Tyrone Lebon and styled by Marie Chaix.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/self-portrait_AW23-Campaign_Gigi-Hadid_self-portrait_Tyrone-Lebon_01_PRESS-Clean.jpg?crop=0px%2C3447px%2C5571px%2C3121px&resize=1000%2C563',
  },

  {
    title: 'The Best Amazon Prime Day Deals, From Skincare to Home Fitness ',
    link: 'https://www.wmagazine.com/fashion/best-prime-day-deals-skincare-fashion',
    content: [
      `Now is the time to stock up on all of the essentials Amazon has to offer. Prime Day, the site’s annual sale event, runs this year from July 11 to 12. While we don’t have much guidance to offer you when it comes to pet food, paper towels or appliances (all things that are bound to be snapped up in huge numbers this week), we c
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/7/7439808c-ffaf-4ed6-a98e-7e3b3851dc92-c3b7e4f3-0891-44fd-8604-17eac7d55131-wm202204acce9.jpeg?w=900&h=1174&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5027&fp-y=0.5501',
  },

  {
    title: 'All the Must-See Looks From the Barbie LA Premiere ',
    link: 'https://www.wmagazine.com/fashion/barbie-la-premiere-red-carpet-fashion',
    content: [
      `The only downside to Barbie finally premiering in theaters on July 21st is that it means the movie’s press tour will have ended. Margot Robbie and her stylist, Andrew Mukamal, have kept busy, delivering look after look for the film’s various press stops, taking inspiration from decades of actual Barbi
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/getty/2023/7/10/1468fecf-55b2-4ab8-92b3-b3a28988aa4c-getty-1529637081.jpg?w=900&h=1350&fit=crop&crop=faces&auto=format%2Ccompress',
  },

  {
    title: 'Supergoop Is Aiming to Build an SPF Empire',
    link: 'https://wwd.com/beauty-industry-news/skin-care/amanda-baldwin-supergoop-interview-ceo-1235739876/',
    content: [
      `LONDON — Supergoop is working to take its user-friendly SPF products global, and is clearing various regulatory hurdles to do so. The company specializes in SPF products that blend into its range of makeup, body care and skin products, aiming to avoid sunscreen that is sticky, tacky or messy. In 2022, the brand reached $250 million in s ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/20221013_SUPERGOOP_Amanda_Baldwin_0185_3596FC_C.jpg?crop=0px%2C266px%2C2752px%2C1539px&resize=1000%2C563',
  },

  {
    title: 'The Best Red Lipstick Is Indisputably Dior’s Forever Rouge #999',
    link: 'https://www.wmagazine.com/beauty/best-red-lipstick-dior-forever-rouge-999',
    content: [
      `When it comes to lipstick, not all reds are created equal. Feel free to drive yourself nuts exploring your local Sephora in search of the perfect rosy hue—but if you’re short on time, I’d like to offer you some advice: give Dior’s Forever Rouge #999 a try.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/11/e5c8f9d5-e228-4b27-a89d-6411001d2b00-wselects_dior.jpg?w=900&h=565&fit=crop&crop=faces&auto=format%2Ccompress',
  },

  {
    title: 'Fall 2023 Couture Trend: Metallics',
    link: 'https://wwd.com/fashion-news/fashion-trends/fall-2023-couture-trend-metallic-fashion-1235738602/',
    content: [
      `Labor-intensive craftsmanship is a hallmark of the Paris Haute Couture collections, be it through deceptively simple constructions or the use of decadent surface embellishment. The fall 2023 season saw myriad looks with shimmering paillettes and fringes in addition to metallic foils, beading and appliqués, proving that out-and-out glamour ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/valentino-couture-fall-2023-paris-060-GG.jpeg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'L’Oréal and Verily partner on skin and hair research project',
    link: 'https://fashionunited.uk/news/business/l-oreal-and-verily-partner-on-skin-and-hair-research-project/2023071170481',
    content: [
      `Beauty giant L’Oréal has announced a new partnership with Alphabet health tech firm Verily for a multi-year study addressing skin and hair health.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/11/image-png-verily-x-l-oreal-4-v-6yqtwstb-2023-07-11.jpeg',
  },

  {
    title:
      'Kerings acquisition of Creed is reportedly valued at 3.5 billion euros',
    link: 'https://fashionunited.uk/news/business/kering-s-acquisition-of-creed-is-reportedly-valued-at-3-5-billion-euros/2023071070464',
    content: [
      `Kering, the French luxury goods conglomerate, last month announced its surprise acquisition of the prestigious fragrance house Creed, in a transaction valued at 3.5 billion euros, according to a report in the Financial Times. Although the exact financial terms of the deal were not disclosed initially, nor confirmed, this valuation sheds light on the magnitude of the acquisition.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2023/06/27/825x550-creed-cp-kering-beaute-1mg6lk87-2023-06-27.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Prada’s Path to Retail Performance',
    link: 'https://www.businessoffashion.com/articles/luxury/pradas-path-to-retail-performance/',
    content: [
      `Luca Solca examines Prada Group CEO Andrea Guerra’s push to double retail space productivity at its flagship brand.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/8XoIUlcLkpCXr5GHBfags1aYhOQ=/1800x0/filters:format(jpg):quality(70):focal(874x452:884x462)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/SKPVHGGWUZAGJKPIJ7B4VW7BJ4.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Dior opens pop-up in London for Dior Tears collaboration',
    link: 'https://fashionunited.uk/news/retail/dior-opens-pop-up-in-london-for-dior-tears-collaboration/2023071070453',
    content: [
      `French fashion house Dior has opened a pop-up in London to celebrate Dior Tears, the collaboration between Dior Men’s artistic director Kim Jones and Tremaine Emory’s Denim Tears.`,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/10/dior-phonica-record-store-soho-7-jbtuzskp-2023-07-10.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Fragrance Ingredients Are at Risk in the European Union',
    link: 'https://wwd.com/beauty-industry-news/fragrance/fragrance-ingredients-risk-european-union-1235725304/',
    content: [
      `L’Oréal chief executive officer Nicolas Hieronimus has always had an affinity for fragrance. But rather than take a victory lap while being inducted into the Hall of Fame at the Fragrance Foundation awards in New York on June 15, he used the time onstage to give an impassioned rallying cry. “I would like to call on everybody in the room, ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/final_perfume_cover_illo_WWD_MB.jpg?crop=0px%2C176px%2C2910px%2C1630px&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Heristoria’s Second Chapter, Prada’s New China Partnernship, Ramy Brook Gets Active',
    link: 'https://wwd.com/fashion-news/fashion-scoops/heristorias-second-chapter-pradas-china-partnernship-ramy-brook-gets-active-1235730760/',
    content: [
      `The LVMH platform unveils a 31-piece selection of archival pieces, Prada has partnered with China's women's soccer team, Ramy Brook adds activewear.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/APOM_H_OOO_08_FENDY_SAC_VOYAGE_3183.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Balenciaga Makes Its Couture Comeback ',
    link: 'https://www.wmagazine.com/fashion/balenciaga-haute-couture-fall-2023',
    content: [
      `A slow-moving Eliza Douglas in a silver armor dress closed Balenciaga’s 52nd couture presentation at the fashion house’s Parisian salon. Perhaps the look was meant to be a symbol for a modern-day Joan of Arc, o
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/5/c90bd84c-6718-4671-88a1-2d95aab18a47-balenciaga-52nd-couture-look-53_saskia-de-braw.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4907&fp-y=0.3294',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Coco de Mer opens new private shopping space',
    link: 'https://fashionunited.uk/news/retail/coco-de-mer-opens-new-private-shopping-space/2023071070454',
    content: [
      `Luxury lingerie brand Coco de Mer has opened an appointment-only private shopping space in Primrose Hill, London, following the closure of its Covent Garden boutique earlier in the year to streamline into a digital-first business for growth and stability.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/10/coco-de-mer-vip-personal-shopping-space-mva5pd2j-2023-07-10.jpeg',
  },

  {
    title: 'Are White Socks the Biggest Trend of the Summer?',
    link: 'https://www.wmagazine.com/fashion/white-socks-sandals-how-to-wear',
    content: [
      `There’s nothing revolutionary about the humble white tube socks. You (and everyone you know) probably has a half-dozen pairs in your dresser right now. So to say “white socks are the styling trend of the summer” would seem a stretch. Yet here we are...saying white socks are the styling trend of the summer. Over the past few weeks, the white sock has appeared a secret styling weapon. While
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/28/3a31cea1-1a0a-45e4-aec9-500597d80ba2-trends_socks.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.508&fp-y=0.8507',
  },

  {
    title:
      'EXCLUSIVE: Prada Becomes Official Partner of the Chinese Women’s National Football Team',
    link: 'https://wwd.com/fashion-news/fashion-scoops/exclusive-prada-official-partner-chinese-womens-national-football-team-1235729342/',
    content: [
      `SHANGHAI — Prada has revealed a partnership with the Chinese Women’s National Football Team, in an effort to support talented young athletes and explore the world of sport.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/cc5305c82257f3041288a3a7ffb7a606.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    title: 'Marc Jacobs collaborates with Blumarine',
    link: 'https://fashionunited.uk/news/fashion/marc-jacobs-collaborates-with-blumarine/2023071070444',
    content: [
      `Heaven by Marc Jacobs, the Gen Z line from the US fashion designer, has launched a capsule collection with luxury label Blumarine that combines "Italian flair with American streetwear".
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/10/petr909-133-c-crop-v2-jpeg-omln9pxx-2023-07-10.jpeg',
  },

  {
    title: 'Burberry partners with The Brit School on course and bursary prize',
    link: 'https://fashionunited.uk/news/business/burberry-partners-with-the-brit-school-on-course-and-bursary-prize/2023071070450',
    content: [
      `Luxury fashion label Burberry has unveiled a new partnership with The Brit School in a bid to both support fashion education and aid young people from global majority backgrounds when entering the industry.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/10/banner-kt4h69uq-2023-07-10.jpeg',
  },

  {
    title: 'Jean Paul Gaultier Couture Presents a New Era of Archival Fashion',
    link: 'https://www.wmagazine.com/fashion/jean-paul-gaultier-couture-fall-2023-julien-dossena',
    content: [
      `Julien Dossena put forth a modern and fresh take on how fashion archives can be reinterpreted during his show as the latest guest designer for Jean Paul Gaultier Haute Couture. The presentation, held at the brand’s Paris headquarters on July 5, was created especially with the house’s spra
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/5/4b6a1dce-72e0-4d90-96f4-b5372669ce98-gettyimages-1517360816.jpg?w=900&h=1353&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.52&fp-y=0.2458',
  },

  {
    title: 'At Fendi, a Couture Collection Inspired by High Jewelry',
    link: 'https://www.wmagazine.com/fashion/fendi-jewelry-haute-couture-fall-2023-photos',
    content: [
      `Draping and Grecian goddess dressing is back with a vengeance—that is, if the haute couture collections have anything to say about the matter. At Fendi’s fall 2023 couture show on July 6, fluid dresses flowed across the Italian marble runway to an operatic techno remix that boomed through the venue at the Palais Brongniart in Paris.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/6/8e2c08cd-92c9-46f5-bc37-aac45b9fd2d9-gettyimages-1519798371.jpg?w=900&h=1350&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.492&fp-y=0.184',
  },

  {
    title: 'Why Does Fashion Need Haute Couture?',
    link: 'https://www.businessoffashion.com/opinions/fashion-week/why-does-fashion-need-haute-couture/',
    content: [
      `Fashion companies are using the age-old traditions of couture to drive different business strategies, writes Imran Amed.

      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/Vo89nhB06DFftgyp1l0XxxosgjI=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/ICKJAXUBYVHAJGVIXHJ6EYEM7M.jpg',
  },

  {
    title: 'Valentino Captures Pure Couture Fantasy in Chantilly',
    link: 'https://www.wmagazine.com/fashion/valentino-couture-fall-2023-photos',
    content: [
      `On the third day of the fall 2023 couture show season, Valentino took guests on a journey fit for a fairytale at a chateau in Chantilly, France. At a time when destination shows are the norm, the brand took couture sensibilities and merged them with an epic set to fulfill a total fashion fantasy on an otherwise typical Wednesday night.

      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/5/574fbb1f-c4c3-4542-93ad-b722ed6cb635-gettyimages-1517372411.jpg?w=900&h=1349&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4933&fp-y=0.2969',
  },

  {
    title: 'Tom Ford charts a new course with Milan show',
    link: 'https://fashionunited.uk/news/fashion/tom-ford-charts-a-new-course-with-milan-show/2023070770436',
    content: [
      `Tom Ford, the fashion brand acquired by the Estée Lauder Companies last year, is making a significant shift by presenting its highly anticipated spring/summer 2024 women's collection in Milan during Milano Moda Donna.

      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/07/07/tom-ford-estee-lauder-1-pd0hvh6v-2022-11-16-4jw1zpp5-2023-07-07.jpeg',
  },

  {
    title:
      'China’s rebound and Middle East’s rise to drive luxury market next year',
    link: 'https://fashionunited.uk/news/business/china-s-rebound-and-middle-east-s-rise-to-drive-luxury-market-next-year/2023070770433',
    content: [
      `While the luxury market remained fairly consistent throughout the course of the pandemic, the sector is still set to embark on a notable increase as consumers from various regions up their spending. This is according to the ninth edition of the Altagamma Consumer and
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=926,quality=70,width=1388/https://fashionunited.com/img/upload/2023/07/07/chanel-capri-seasonal-boutique-311-hd-xokddycp-2023-04-07-eywy1ak1-2023-05-25-sjcb4v9c-2023-06-16-9dm9b4me-2023-07-07.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Schiaparelli’s Impossible Wardrobe',
    link: 'https://www.wmagazine.com/fashion/schiaparelli-fall-2023-haute-couture-photos',
    content: [
      `The haute couture fall 2023 collection shown in Paris gave nods to Lucien Freud, Yves Klein, and many more avant-garde artists.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/3/e12d89ee-8aeb-4e89-a8c0-ce06fc09deb2-schiaparelli_hcfw2324_look26.jpg?w=768&h=1152&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.512&fp-y=0.2089',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Thom Browne debuts at Paris Haute Couture Week',
    link: 'https://fashionunited.uk/news/fashion/thom-browne-debuts-at-paris-haute-couture-week/2023070470358',
    content: [
      `American fashion designer Thom Browne unveiled his inaugural women’s and men’s couture collection at Paris Haute Couture Week with a theatrical display at the Palais Garnier in front of 2,000 cardboard cutouts of men in grey suits.`,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=926,quality=70,width=1388/https://fashionunited.com/img/upload/2023/07/04/thom-browne-hc-atm-f23-010-y3m14lzy-2023-07-04.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Life Cycle of a Viral Fashion Trend',
    link: 'https://www.businessoffashion.com/articles/marketing-pr/the-life-cycle-of-a-viral-fashion-trend/',
    content: [
      `BoF explains why online trends from cottagecore and quiet luxury to Barbiecore and coastal grandmother bubble up and go mainstream — and how brands can capitalise on them.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/OuzXWTX58k2ddPASHQGiSe4pU60=/1600x0/filters:format(png):quality(70):focal(857x555:867x565)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/3ZVFJOILHFFBZGUSQCUN3ZOFYU.png',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Moncler CEO Remo Ruffini receives honorary degree',
    link: 'https://fashionunited.uk/news/people/moncler-ceo-remo-ruffini-receives-honorary-degree/2023070570367',
    content: [
      `Remo Ruffini, the chief executive of Moncler, accepted an honorary degree of arts in fashion and entrepreneurship from the University for the Creative Arts (UCA) “in recognition of his outstanding contribution to fashion and business”.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=926,quality=70,width=1388/https://fashionunited.com/img/upload/2023/07/05/full-res-2-xruvuy5j-2023-07-05.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Cult Beauty Launches Body Positive Campaign, Says ‘No’ to Airbrushing',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/cult-beauty-launches-body-positive-campaign-says-no-airbrushing-1235721925/',
    content: [
      `The online beauty retailer's new campaign, “Can’t (Re)Touch This,” aims to reduce the number of airbrushed model images amid "an epidemic" of eating disorders and mental health problems among young people in the U.K.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/webimage-B9419661-959B-4737-A9B07C500E987A65.png?crop=257px%2C0px%2C543px%2C304px&resize=390%2C220',
  },

  {
    title:
      'Givenchy Adds First Los Angeles-area Store to Its Fleet of Nine U.S. Locations',
    link: 'https://wwd.com/business-news/retail/givenchy-rodeo-drive-beverly-hills-matthew-williams-lvmh-first-los-angeles-store-1235723074/',
    content: [
      `The outpost on Rodeo Drive in Beverly Hills is only temporary. Next year, a new venue will open on the same street.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/Givenchy.jpg?w=1000&h=563&crop=1&resize=681%2C383',
  },
  {
    title: 'Dior Goes Back to Basics With Elevated, Pared-Back Couture',
    link: 'https://www.wmagazine.com/fashion/dior-fall-2023-couture-photos',
    content: [
      `At Dior’s fall 2023 haute couture show, 67 models strode down the catwalk at the Musée Rodin wearing a sea of neutrals, all constructed in pristine and classical shapes. There were tunics, peplums, capes, and stoles, all done up with barely any embellishment.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/7/3/2a0a3a67-2e4a-417a-8ac1-ecff51136acf-gettyimages-1511580126.jpg?w=768&h=1152&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4973&fp-y=0.2353',
  },
  {
    title: 'Is India the Next Frontier for Luxury Department Stores?',
    link: 'https://www.businessoffashion.com/articles/global-markets/is-india-the-next-frontier-for-luxury-department-stores/',
    content: [
      `Industry leaders are divided on whether Galeries Lafayette’s expansion into India will spur other luxury department stores to enter the rapidly growing market.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/D-H5J3KX7ndXFXkZRAk0ZyOpY30=/1600x0/filters:format(jpg):quality(70):focal(1962x254:1972x264)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/PAGZO2NYIVAOXBBSQPRO6QWEWY.jpg',
  },
  {
    title: 'Armani Privé Couture Fall 2023',
    link: 'https://wwd.com/runway/fall-couture-2023/paris/armani-prive/review/',
    content: [
      `The glossy red invitation for Giorgio Armani’s fall Privé couture show was no red herring, foreshadowing a collection that took most of its cues from roses — and also lacquer boxes from the Far East.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/giorgio-armani-prive-couture-fall-2023-001.jpg?crop=0px%2C26px%2C1365px%2C1821px&resize=555%2C740',
  },

  {
    title: 'How beauty retail is leading the way in tech innovation',
    link: 'https://fashionunited.uk/news/business/how-beauty-retail-is-leading-the-way-in-tech-innovation/2023070570363',
    content: [
      `Virtual try-on – or VTO – refers to the use of augmented reality (AR) to view digitised versions of an object, most often seen in the overlay of an image that aims to give an idea of what
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=926,quality=70,width=1388/https://fashionunited.com/img/upload/2023/07/04/2avatarstalking-4eepqa6w-2023-07-04.jpeg',
  },
  {
    title: 'Imran Amed & Luca Solca: How Big Luxury Dominates Fashion',
    link: 'https://www.businessoffashion.com/opinions/luxury/imran-amed-luca-solca-how-big-luxury-dominates-fashion/',
    content: [
      `Courtesy of System Magazine, BoF’s Imran Amed and Bernstein analyst Luca Solca discuss how the biggest French luxury companies dominate the fashion industry. “They control the whole ecosystem; they have a lock on it.”
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/ZW62BWZAlEFf8AaLa3m4dD6fpvY=/1600x0/filters:format(jpg):quality(70):focal(1010x162:1020x172)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/3TUJ2NKYLRH6TCQ2LLQLM5V6MM.jpg',
  },
  {
    title: 'French riots could dent luxury sales',
    link: 'https://fashionunited.uk/news/fashion/french-riots-could-dent-luxury-sales/2023070470361',
    content: [
      `The contrast between the glamorous haute couture presentations and the ongoing riots sweeping Paris and France following a tragic shooting is striking. As governments caution their citizens
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=926,quality=70,width=1388/https://fashionunited.com/img/upload/2023/07/04/schiaparelli-alta-costura-fw23-9-4tsesj69-2023-07-04-qzljem1f-2023-07-04.jpeg',
  },

  {
    title:
      'At Chanel, Whimsical Haute Couture Meets Wearable French Girl Style',
    link: 'https://www.wmagazine.com/fashion/chanel-haute-couture-fall-2023',
    content: [
      `It’s been a season full of couture shows taking place in the great outdoors, and Chanel was no exception. For its fall 2023 haute couture presentation, the label took guests on a journey just beyond the Eiffel Tower where, on the old cobbl
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/getty/2023/7/4/4a3907fe-1de4-46bb-9098-bebcaa9986a8-getty-1514160647.jpg?w=768&h=1152&fit=crop&crop=faces&auto=format%2Ccompress',
  },
  {
    title:
      'Alternatives to Viscose Rayon Made with Old Clothes and Coconut Water',
    link: 'https://www.businessoffashion.com/articles/sustainability/fashions-alternatives-to-viscose-rayon/',
    content: [
      `Millions of trees are felled to make viscose rayon, but two new eco-friendly options are being produced at a commercial scale.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/CibLaCfrqLNsFVFXQECllQMi1cc=/1600x0/filters:format(jpg):quality(70):focal(794x430:804x440)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/PYAOFXWBWNERDGUCXNYZBXZ2M4.jpg',
  },
  {
    title: 'Couture on the Edge of Darkness',
    link: 'https://www.businessoffashion.com/reviews/fashion-week/alaia-schiaparelli-dior-thom-browne-paris-fashion-week-haute-couture-autumn-winter-2023/',
    content: [
      `How does haute couture cope in Paris when real life intrudes, asks Tim Blanks.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/6pXxkb0W2ZjR2CjONHPhXLqWSMs=/1600x0/filters:format(jpg):quality(70):focal(942x498:952x508)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/K2ONRCY55JALRJ7USYSRKVDEPE.jpg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Khrisjoy, Akoni Owner Names CEO',
    link: 'https://wwd.com/business-news/human-resources/khrisjoy-akoni-owner-names-ceo-1235720285/',
    content: [
      `Shahzad Akhtar has been named group CEO of Alsara Strategic Investments, a new position at the company, which points to an increased focus on brand building and M&A activities.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/SHAHZAD-AKHTAR.jpg?crop=0px%2C347px%2C4160px%2C2327px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Celine cancels fashion show as France mourns',
    link: 'https://fashionunited.uk/news/fashion/celine-cancels-fashion-show-as-france-mourns/2023070370310',
    content: [
      `French fashion house Celine has cancelled its menswear show in Paris this weekend due to ongoing riots sparked by the police killing of a teenager, designer Hedi Slimane said Saturday.`,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2023/07/03/celine04-qvaraci7-2022-11-23-7muh4wy0-2023-07-03.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Selena Gomez’s Dua Lipa x Versace Look Proves Fashion Heals All',
    link: 'https://www.wmagazine.com/fashion/selena-gomez-dua-lipa-versace-unfollow',
    content: [
      `Selena Gomez may be one of the most popular figures on Instagram, but her follower count got slightly smaller earlier this week. On Sunday, it was reported that the singer unfollowed Gigi and Bella Hadid, Zayn Malik,
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/30/be4e8472-bca4-41a1-97e6-5aa94e96922f-snapinstaapp_356774668_288119253610512_8302037738788880592_n_1080.jpg?w=900&h=900&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5893&fp-y=0.344',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Mulberry believed to have denied Mike Ashley’s board seat bid',
    link: 'https://fashionunited.uk/news/business/mulberry-believed-to-have-denied-mike-ashley-s-board-seat-bid/2023070370311',
    content: [
      `Luxury brand Mulberry has reportedly rejected Mike Ashley’s bid to join its board after the retail tycoon expressed concern over the company’s handling of its Asian business.

      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2022/09/20/mike-ashley-st3j8ie1-2022-09-20.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Pharrell Hits a Billion, Moschino Taps Yu, Dior’s Bright Touch',
    link: 'https://wwd.com/fashion-news/fashion-scoops/pharrell-hits-vuitton-billion-moschino-taps-yu-diors-bright-touch-1235721199/',
    content: [
      `Pharrell Williams' debut Louis Vuitton show garnered more than 1 billion views, Esther Yu is Moschino's new ambassador, Dior's latest ads go bright.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/LV-final.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Kendall Jenner Does Her Version of Preppy Without Pants',
    link: 'https://www.wmagazine.com/fashion/kendall-jenner-blazer-yankees-hat-no-pants-nyc',
    content: [
      `Kendall Jenner may have just touched down from Paris, but her look on Thursday may have been more suited to the South of France than the Big Apple. While in New York City, Jenner put her twist on “yacht club chic” in her very signature way—sans pants.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/getty/2023/6/30/deacc432-1139-46cc-a0b4-53304ed764dd-getty-1504911152.jpg?w=864&h=658&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4933&fp-y=0.177',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Salvatore Ferragamo CFO resigns after 19 years at company',
    link: 'https://fashionunited.uk/news/business/salvatore-ferragamo-cfo-resigns-after-19-years-at-company/2023070370307',
    content: [
      `The chief financial officer of Italian luxury brand Salvatore Ferragamo has announced his resignation after serving for over 19 years at the company.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2023/04/26/ferragamo-ga0qsnwd-2023-04-26.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Trendstop Fall/Winter 2023-24 Women’s Catwalk Sport & Active',
    link: 'https://fashionunited.uk/news/fashion/trendstop-fall-winter-2023-24-women-s-catwalk-sport-active/2023070370318',
    content: [
      `Trendstop brings FashionUnited readers an insight into the key women’s sport and active-inspired directions emerging from the Fall Winter 2023-24 runways.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2023/07/03/main-image-heron-preston-fall-winter-2023-24-8jz8hnwy-2023-07-03.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'How Haute Couture Week Has Gone Global',
    link: 'https://www.businessoffashion.com/briefings/luxury/how-haute-couture-week-has-gone-global/',
    content: [
      `The schedule has started to reflect a clientele increasingly centred in Asia, the Middle East and other regions beyond the traditional core of Europe and North America.

      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/9CAa3Kyh-piYQUYPV_qZrCY1lGo=/1800x0/filters:format(jpg):quality(70):focal(889x206:899x216)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/NTHH2IPAQJDZRJHV6M5QUMOKLU.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'New Designers announces winners of 2023 emerging talent showcase',
    link: 'https://fashionunited.uk/news/business/new-designers-announces-winners-of-2023-emerging-talent-showcase/2023070370317',
    content: [
      `New Designers, an annual showcase for emerging creators, has unveiled the winners of its ND Awards 2023 as part of its two-week celebration of design and innovation.

      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2023/07/03/newdesigners-daytwo-associateprizes-new-designer-of-the-year-beth-somerville-falmouth-university-n9kxbecn-2023-07-03.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Couture week comes to Paris amid riot fears',
    link: 'https://fashionunited.uk/news/fashion/couture-week-comes-to-paris-amid-riot-fears/2023070370309',
    content: [
      `The fashion world is on edge as haute couture week kicks off on Monday in Paris, which has seen nights of violent riots over the police killing of a teenager.

      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2023/07/03/33m397k-highres-1-50-7uw495bf-2023-07-03.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Kering Eyewear completes acquisition of UNT',
    link: 'https://fashionunited.uk/news/business/kering-eyewear-completes-acquisition-of-unt/2023070370305',
    content: [
      `Kering Eyewear has completed the acquisition of UNT, Usinage & Nouvelles Technologies. The takeover was announced on March 13, 2023.

      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=480,quality=70,width=720/https://fashionunited.com/img/upload/2023/04/28/kering-eyewear-unt-gucci-clp-f23-030-ili9uifp-2023-03-14-0z9oowp4-2023-04-28.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Patou RTW Spring 2024',
    link: 'https://wwd.com/runway/spring-2024/paris/patou/review/',
    content: [
      `With “Dancing Diaries,” Patou’s artistic director Guillaume Henry was at once sending the weekend off with a bang and kicking off a week of couture presentations in Paris with a zesty show full of leg-baring party looks.

      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/07/Patou-rtw-spring2024-001.jpg?w=555&h=740&crop=1',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Beauty’s Inventory Shrink Conundrum',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/beauty-inventory-shrink-conundrum-1235681000/',
    content: [
      `Personal care and beauty products under lock and key? That is becoming increasingly common place in mass merchandisers and specialty beauty retailers across the country, with everyday items like body wash, shampoo and toothpaste safeguarded securely behind locked plexiglass windows in many stores and the likes of Ulta Beauty preparing to ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/WWD-Money-Inc-Column-June-Final.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Dries Van Noten Blends Beauty, Accessories in New Paris Boutique',
    link: 'https://wwd.com/fashion-news/designer-luxury/dries-noten-beauty-boutique-paris-accessories-1235716771/',
    content: [
      `PARIS — Dries Van Noten’s newest retail concept here showcases a 17th-century tapestry by Dutch architect and artist Hans Vredeman de Vries, whose work on perspective was revolutionary for its time.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/20230629-DriesVanNoten-Lorez-77361.jpg?crop=0px%2C137px%2C3500px%2C1958px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Celebrity Barber Vince Garcia on Career Rise, Dior Ambassadorship',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/celebrity-barber-vince-garcia-dior-1235683448/',
    content: [
      `As a kid, Vince Garcia didn’t know he would become one of the most in-demand celebrity barbers of his generation. But he always had a razor-sharp knack for creativity. “I come from an artistic background, I loved drawing as a kid and I originally started doing designs on all my friends and cousins,” Garcia said. “We had a childhood barbe ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/2-DO01180395.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Cart.com Secures $60 Million in Series C Funding',
    link: 'https://wwd.com/business-news/business-features/cart-com-secures-60-million-series-c-funding-1235719197/',
    content: [
      `Cart.com, a provider of comprehensive e-commerce solutions meant to enable merchants to sell and fulfill, has landed $60 million in Series C funding from a variety of financial investors including B. Riley Venture Capital, Kingfisher Investment Advisors, Snowflake Ventures, Prosperity7 Ventures, Legacy Knight, and others. The Austin, Tex ...

      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/DSC04607.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Aquazzura Opens a Flagship on New Bond Street, Its Second Mayfair Store',
    link: 'https://wwd.com/business-news/retail/aquazzura-opens-flagship-new-bond-street-second-mayfair-store-1235720447/',
    content: [
      `Aquazzura is the latest luxury brand to land on New Bond Street, which is coming alive once again with openings and refurbishments in the wake of the pandemic, and despite the challenges of Brexit. The new store is located at 26 New Bond Street, a space formerly occupied by brands including Lucie Campbell and Fauré Le Page.  It is the b ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/AQUAZZURA-NEW-BPND-STREET-BOUTIQUE_OFFICIAL-IMAGES-8.jpg?crop=0px%2C104px%2C1152px%2C644px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Dior Channels Rebellious Heroines With Fall Campaign',
    link: 'https://wwd.com/business-news/media/dior-fall-campaign-channels-rebellious-heroines-1235720294/',
    content: [
      `REBEL YELL: Maria Grazia Chiuri’s fall collection for Dior was a mostly monochrome affair, but for the advertising campaign, Brigitte Niedermair bathed models in a halo of color. Ana Oliveira, Maryel Uchida, Florencia Mayer, Sophia Lisboa and Abeny Nhial are outlined in luminous green, blue or pink in the images.   Chiuri was inspired by ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/DP-WINTER23-copy.jpg?crop=188px%2C223px%2C4816px%2C2695px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Thom Browne Is Taking the Couture Stage    ',
    link: 'https://wwd.com/fashion-news/fashion-features/thom-browne-couture-preview-pharrell-dish-1235716128/',
    content: [
      `Remember the headline-making gold bullion Thom Browne glamour gown and cape Lizzo wore to the 2022 Met Gala? The one that took 22,000 hours of needlework to craft? More than one pair of hands was working no doubt, but still — that’s more than 900 days for one look.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/WWD-THOMBR4939-copy.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Global Fashion Summit: Sustainability in the spotlight, but ‘less talk, more action’ needed    ',
    link: 'https://fashionunited.uk/news/fashion/global-fashion-summit-sustainability-in-the-spotlight-but-less-talk-more-action-needed/2023063070287',
    content: [
      `More than 1,000 representatives from fashion brands, retailers, NGOs, policymakers, and manufacturers returned to Copenhagen this week for the 2023 edition of the Global Fashion Summit.`,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/30/global-fashion-summit-c52t9wrt-2023-06-30.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'EXCLUSIVE: Paco Rabanne Is Revving Up With Makeup, More Boutiques',
    link: 'https://wwd.com/fashion-news/designer-luxury/rabanne-makeup-branding-ceo-feature-1235709549/',
    content: [
      `PARIS — Paco Rabanne is ready for its close-up, and global expansion on multiple fronts, having synced up its fashion and fragrance businesses.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/IMG6060.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Isabel Marant Opens New Stores in Tokyo and East Hampton',
    link: 'https://wwd.com/fashion-news/fashion-scoops/isabel-marant-unveils-new-stores-in-tokyo-and-east-hampton-1235719421/',
    content: [
      `Isabel Marant has expanded her retail fleet to 81 stores, with the opening of new stores in Tokyo and East Hampton, New York.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/C8A0729_new.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Estée Lauder Companies launches programme for responsible store design    ',
    link: 'https://fashionunited.uk/news/retail/estee-lauder-companies-launches-programme-for-responsible-store-design/2023063070286',
    content: [
      `Beauty giant Estée Lauder Companies (ELC) has announced the launch of its Responsible Store Design programme, created to integrate sustainability into the group’s retail network.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/30/origin-store-rendering-rq7idemz-2023-06-30.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Gucci Launches Summer Activations in The Hamptons',
    link: 'https://wwd.com/fashion-news/fashion-scoops/gucci-restaurant-sant-ambroues-hamptons-1235719286/',
    content: [
      `Gucci is marking summer with several new activations at its East Hampton boutique. Gucci Osteria da Massimo Bottura Beverly Hills, the Michelin-starred Los Angeles restaurant that is one of the city’s most coveted reservations, is appearing out east this summer and is p
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/BFA_40311_5674097_v1_QC_R150.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'What Will Be Beauty’s Next Big Deal?',
    link: 'https://www.businessoffashion.com/articles/beauty/what-will-be-beautys-next-big-deal/',
    content: [
      `Kering’s reported multi-billion dollar acquisition of Creed is just the latest blockbuster beauty deal – and the industry shows no signs of slowing down.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/jcBRmq1uLZBarPNfU6vBaSD8gC8=/1800x0/filters:format(jpg):quality(70):focal(899x377:909x387)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/73U2VNWH4NEG7LPTIAMM2CRBCA.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Is Fashion Illustration a Dying Art?',
    link: 'https://www.businessoffashion.com/articles/luxury/is-fashion-illustration-a-dying-art/',
    content: [
      `A lavish new monograph from artist François Berthoud is a spectacular reminder of what we’ve been missing, writes Tim Blanks.

      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/zdKkJgsIYr8P9DQN-NKJ79X1SwI=/1024x0/filters:format(jpg):quality(70):focal(1943x1161:1953x1171)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/Y6XCN3HNRZC3FLUCYAMTDNIAZI.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Best Looks From the Spring 2024 Collections',
    link: 'https://www.wmagazine.com/fashion/fashion-week-spring-2024',
    content: [
      `Just as we’ve closed the page on a monumental men’s spring 2024 season that saw Louis Vuitton employ its first celebrity creative director in Pharrell Williams, while other designers showed their collections off schedule (Marc Jacobs staged his fall 2023 show a full five months after the regular season), suddenly, it is time for a whole new round of fabulous fashion. This year, the spring 2024 shows have beg
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/29/31b50c81-9baf-4296-806f-5e13f47a6de8-060.jpg?w=900&h=1350&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4973&fp-y=0.1973',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Fashion School Leaders Express Concern Over Supreme Court Affirmative Action Decision',
    link: 'https://wwd.com/fashion-news/fashion-features/fashion-school-affirmative-action-decision-supreme-court-reaction-1235719621/',
    content: [
      `The U.S. Supreme Court decision Thursday to establish new limits on affirmative action programs, essentially ending the consideration of race in college admissions, caused concern among fashion design school leaders.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/supreme-court-aa-0623.jpeg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Couture Designer Jisoo Baik Sees Clothes as Floating Architecture ',
    link: 'https://wwd.com/fashion-news/designer-luxury/jisoo-baik-couture-debut-clothes-floating-architecture-bjork-ariana-grande-1235709557/',
    content: [
      `When couture designer Jisoo Baik found herself seated between Jean-Paul Gaultier and Jeremy Scott at Björk’s orchestra concert, she was hit by the enormity of the moment.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/JISOO-BAIK-FW24_4.jpg?crop=0px%2C62px%2C1770px%2C992px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Tamara Ralph’s Couture Comeback ',
    link: 'https://www.businessoffashion.com/articles/luxury/tamara-ralphs-couture-comeback/',
    content: [
      `Two years after the shuttering of Ralph & Russo, creative director Tamara Ralph is returning to the world of couture, with the debut of a new label under her own name.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/Yn-p6qu8WqzI-cGMfCdOhR9viNk=/1024x0/filters:format(jpg):quality(70):focal(599x513:609x523)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/SLQKHGF6YJFCVCDKQAGJTCV3BE.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The 20 Most Iconic Sunscreens in Beauty ',
    link: 'https://wwd.com/beauty-industry-news/beauty-features/the-20-most-iconic-sunscreens-in-beauty-1235685172/',
    content: [
      `It’s sunny days ahead for SPF products. The category, which grew during the pandemic despite housebound consumers, has become a medicine cabinet mainstay. Beauty shoppers see it now as a daily essential, not a seasonal one. To discover the top products in the category, WWD Beauty Inc polled shy of 400 executives, founders, editors, finan ...
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/230202_Catherine_Losing_WWD_Beauty_263_V3.jpg?crop=0px%2C1096px%2C3744px%2C2094px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Help Wanted: As Luxury Brands Open More Stores, Staffing Challenges Await',
    link: 'https://www.businessoffashion.com/articles/workplace-talent/help-wanted-as-luxury-brands-open-more-stores-staffing-challenges-await/',
    content: [
      `High-end brands are counting on brick-and-mortar retail to deliver the sort of personalised shopping experiences that can’t be replicated online. But hiring and training employees to pull that off can be a challenge.

      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/KeFnJi8ljIlPtdOxpZu16tI1bRY=/1800x0/filters:format(jpg):quality(70):focal(950x339:960x349)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/7UTVJB62ABHHPFYMFYN53UVME4.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Beauty TikTok’s Latest Obsessions: New Releases and Old Makeup Techniques    ',
    link: 'https://www.businessoffashion.com/articles/beauty/beauty-tiktoks-latest-obsessions-new-releases-and-old-makeup-techniques/',
    content: [
      `This week, TikTok couldn’t get enough of new products from Rare Beauty and Rhode, E.l.f.’s collaboration with influencer Mikayla Nogueira and the return of “baking.”

      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/Tr2PzBiFpE_gQtsRjPSz6NN1dLY=/1800x0/filters:format(jpg):quality(70):focal(1004x408:1014x418)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/EYFSMD3HPVFBFEHMSN6TOV57OM.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Global Fashion Agenda launches platform to help textile industry align sustainability goals      ',
    link: 'https://fashionunited.uk/news/fashion/global-fashion-agenda-launches-platform-to-help-textile-industry-align-sustainability-goals/2023062970265',
    content: [
      `The Global Fashion Agenda, a non-profit looking to help the industry collaborate on sustainable solutions, has launched a new platform to do just that.

      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/29/global-fashion-agenda-yv610hrz-2023-06-29.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Simple White Sock Is the Styling Secret of the Summer      ',
    link: 'https://www.wmagazine.com/fashion/white-socks-sandals-how-to-wear',
    content: [
      `There’s nothing revolutionary about the humble white tube socks. You (and everyone you know) probably has a half-dozen pairs in your dresser right now. So to say “white socks are the styling trend of the summer” would seem a stretch. Yet here we are...saying white socks are the styling trend of th

      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/28/3a31cea1-1a0a-45e4-aec9-500597d80ba2-trends_socks.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.508&fp-y=0.8507',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'China’s Fashion Mall Developers in Turf War',
    link: 'https://www.businessoffashion.com/briefings/china/chinas-fashion-mall-developers-in-turf-war/',
    content: [
      `Property developers are set to build 8 million square metres of retail space in a sign of long-term confidence in the troubled but increasingly competitive market.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/6Mi_DrbQwFqme0xfWAnk5ko-VnQ=/1800x0/filters:format(jpg):quality(70):focal(817x415:827x425)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/Z4FVDYMD4ND5TENUVM3733RDMQ.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Tiffany & Co. receives SBTi approval on net-zero emissions target',
    link: 'https://fashionunited.uk/news/business/tiffany-co-receives-sbti-approval-on-net-zero-emissions-target/2023062870241',
    content: [
      `Tiffany & Co. has become the first luxury jeweller to receive approval from the Science Based Targets initiative (SBTi) on its net-zero emissions target as it looks to push forward its sustainability goals.`,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/28/net-zero-image-final-32-4in2oqix-2022-11-21-gfttdi0e-2023-06-28.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Marc Jacobs’s Fall 2023 Runway Show Happened in a Flash',
    link: 'https://www.wmagazine.com/fashion/marc-jacobs-fall-2023-collection-show',
    content: [
      `The designer known to shock and inspire staged a blink-and-you’ll-miss-it presentation.
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/27/011502f6-9a2b-4e02-89cb-cbe8f2ad31a1-mj_fw23_lecca_look10.jpg?w=900&h=1350&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.54&fp-y=0.2827',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Kering Beauté Acquires Creed',
    link: 'https://wwd.com/beauty-industry-news/fragrance/kering-beaute-acquires-creed-beauty-1235714036/',
    content: [
      `PARIS — Kering Beauté has made its first acquisition: Creed. The French luxury house said Monday that it has purchased the totality of the high-end niche fragrance house that’s controlled by BlackRock Long Term Private Capital Europe and the current chairman Javier Ferrán. Financial terms of the all-cash transaction were not disclosed, ...

      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/Creed_Store_Exterior-1.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Alexander McQueen launches candle collection',
    link: 'https://fashionunited.uk/news/fashion/alexander-mcqueen-launches-candle-collection/2023062870245',
    content: [
      `British fashion house Alexander McQueen is branching out into home fragrances with a debut candle collection featuring three scents.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/28/alexander-mcqueen-candles-dfh8f53b-2023-06-28.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Are LED Skincare Devices Worth the Investment?',
    link: 'https://www.wmagazine.com/beauty/led-red-light-blue-light-skincare-devices',
    content: [
      `Red and blue light therapy masks and panels have become a skincare staple. But how do you know if you're getting your money's worth?
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/27/8c828390-2899-466f-9d5a-21e4ed201560-b28db276-f2e0-42d9-bb71-cfcf6f6135d1-wm202203maxk12.jpeg?w=900&h=1170&fit=crop&crop=faces&auto=format%2Ccompress',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Why Beauty’s Challenger Brands Need to Rev Up Growth',
    link: 'https://www.businessoffashion.com/articles/beauty/the-state-of-fashion-beauty-report-independent-brand-scaling-global-product-expansion/',
    content: [
      `For many emerging beauty brands, the early days of getting up and running has been the relatively easy part. Now, they need to confront even greater challenges to continue their growth trajectories, according to The State of Fashion: Beauty.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/pYBgKcarhHRuYiZe9JHH4jw7Upg=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/PXUPDXUY7RFQZFZ77V4XZYQQ3M.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'EU Environment Chief: Fashion’s Age of Underregulation Is Over',
    link: 'https://www.businessoffashion.com/articles/sustainability/fashion-regulation-eu-european-commision-environment-virginijus-sinkevicius/',
    content: [
      `The environmental damage and waste created by throwaway fast fashion is ‘absolutely unacceptable,’ environment commissioner Virginijus Sinkevičius told BoF.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/T6vLQ6NgQHAewp7nsG5yGn5atmE=/1024x0/filters:format(jpg):quality(70):focal(827x917:837x927)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/LVFX7UJPWBGC5LGZSSG3VUZVSM.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Diesel opens store dedicated to its 1DR bag',
    link: 'https://fashionunited.uk/news/retail/diesel-opens-store-dedicated-to-its-1dr-bag/2023062870240',
    content: [
      `Italian fashion brand Diesel has opened its first store dedicated to its 1DR bag in Milan, adjacent to the Diesel Flagship store in San Babila.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/28/diesel-1dr-store-04-o6mvh54p-2023-06-28.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'EXCLUSIVE: Louis Vuitton Signs Tennis Player Carlos Alcaraz as Brand Ambassador',
    link: 'https://wwd.com/fashion-news/fashion-features/louis-vuitton-signs-world-number-one-tennis-player-carlos-alcaraz-brand-ambassador-1235715136/',
    content: [
      `PARIS — Fresh off his win at the Queen’s Club tennis tournament, world number-one player Carlos Alcaraz has been named the latest house ambassador for Louis Vuitton.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/PORTRAIT_CARLOS-ALCARAZ-1.jpg?crop=0px%2C588px%2C11362px%2C6358px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'LVMH’s Antoine Arnault Calls for Luxury-Focused Sustainability Pact',
    link: 'https://www.businessoffashion.com/articles/sustainability/lvmh-climate-luxury-sustainability-coalition-pact/',
    content: [
      `The French luxury group’s head of image and environment addressed criticism over its decision not to join existing industry sustainability initiatives, in which fast fashion players play a large role, and pushed for greater collaboration amongst luxury companies.
      `,
    ],

    image:
      'https://img.businessoffashion.com/resizer/eD93OLujdR1-JE3gtm2R0D1YqKM=/1024x0/filters:format(jpg):quality(70):focal(475x278:485x288)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/WNYUMW2MM5AHLL7USQQKEQDQJY.jpg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'EXCLUSIVE: Paco Rabanne Is Revving Up With Makeup, More Boutiques',
    link: 'https://wwd.com/fashion-news/designer-luxury/rabanne-makeup-branding-ceo-feature-1235709549/',
    content: [
      `
      PARIS — Paco Rabanne is ready for its close-up, and global expansion on multiple fronts, having synced up its fashion and fragrance businesses.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/IMG6060.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Rihanna Is a Mom on the Go in Latest Louis Vuitton Campaign',
    link: 'https://www.wmagazine.com/fashion/rihanna-louis-vuitton-campaign-pharrell-williams-spring-2024',
    content: [
      `
      On June 15, an enormous photograph of a pregnant Rihanna wielding armfuls of colorful Louis Vuitton Speedy bags and a coffee cup in her right hand unfurled onto the face of the Musée D’Orsay in Paris. 
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/26/1c0b17da-b558-426f-b5e1-ac775ed26453-ss24-mens-campaign_keizo-kitajima-martine-syms-1.jpg?w=1440&h=900&fit=crop&crop=faces&auto=format%2Ccompress',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Best Looks From Men’s Fashion Week Spring 2024',
    link: 'https://www.wmagazine.com/fashion/mens-fashion-week-spring-2024',
    content: [
      `
      This year’s spring/summer 2024 men’s fashion week is set to be one for the history books. Seven years ago—when the men’s arm of women’s ready-to-wear shows were still steeped in relative obscurity
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/26/ba8b9495-d1fd-4e55-862e-a5b3990f3a39-gettyimages-1501145035.jpg?w=900&h=1350&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.496&fp-y=0.1716',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Jacquemus turns Versailles lake into fashion front row',
    link: 'https://fashionunited.uk/news/fashion/jacquemus-turns-versailles-lake-into-fashion-front-row/2023062770208',
    content: [
      `
      One of the canniest rising stars of fashion, the French house Jacquemus put on perhaps the most luxurious show of the season in Paris on Monday, putting stars such as Victoria and David Beckham on boats on the lake of the Palace of Versailles to watch the catwalk along the water's edge.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/27/look-09-full-01nm3pcz-2023-06-27.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Burberry expands Burberry Inspire into a global youth empowerment programme',
    link: 'https://fashionunited.uk/news/fashion/burberry-expands-burberry-inspire-into-a-global-youth-empowerment-programme/2023062770223',
    content: [
      `
      British heritage brand Burberry is expanding The Burberry Foundation’s flagship community initiative, Burberry Inspire, into a global youth empowerment programme to support young people.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/27/burberry-expands-support-for-young-people-around-the-world-through-burberry-inspire-cyc-1-courtesy-of-burberry-2fce0ed5-2023-06-27.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Every One of Margot Robbies Barbie Press Looks So Far',
    link: 'https://www.wmagazine.com/fashion/margot-robbie-barbie-movie-press-looks',
    content: [
      `
      The Barbie movie is set to take over every single aspect of commerce and culture for the next month. Now, you can brush your teeth with a Barbie toothbrush before painting your nails with Barbie nail polish and doing your hair with a Barbie flatiron, all to get ready for your
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/27/748e4346-6fdd-4430-b4fc-83d8858bdb76-355455803_1228693944455513_5554367827968223655_n.jpg?w=900&h=1125&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.3653&fp-y=0.6855',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Safilo and Tommy Hilfiger renew eyewear licensing agreement',
    link: 'https://fashionunited.uk/news/fashion/safilo-and-tommy-hilfiger-renew-eyewear-licensing-agreement/2023062770213',
    content: [
      `
      American fashion brand Tommy Hilfiger, owned by PVH Corp., has signed an early renewal of its global eyewear licensing agreement with the Safilo Group.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/27/fa22-woh-rq-duo-punk-088-alt-r4-300-39l-r8i0ayr7-2022-09-01-i3alnocl-2023-06-27.jpeg',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Isamaya Ffrench on Her Latest Launch and Why Penis Lipstick Makes Sense',
    link: 'https://www.wmagazine.com/beauty/isamaya-ffrench-new-makeup-launch-interview',
    content: [
      `
      The East London-based makeup artist Isamaya Ffrench is known for a style that may, more than any other working artist today, define the cultural moment. Her looks are visceral, provocative, and often humorous, touching on the zeitgeist in ways at o
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/image/2023/6/27/bd8e9651-00d9-42d3-afac-0187f8182372-pro00004821_isayama_industrial_hero_campaign_shot_01_f2g.jpg?w=1440&h=960&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5&fp-y=0.434',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'All the Major Fashion Moments From Glastonbury Festival 2023',
    link: 'https://www.wmagazine.com/fashion/glastonbury-2023-fashion-celebrity-festival-style',
    content: [
      `
      If you’ve found rain boots in short supply lately, don’t fret, that’s just because last week was the annual Glastonbury festival, meaning British music lovers trekked out to Worthy Farm to enjoy five days of performances from Elton John, Lizzo, Lil Nas X, and more. Per usual, the muddy conditions l
      `,
    ],

    image:
      'https://imgix.bustle.com/uploads/getty/2023/6/26/25df4091-df66-43ca-b66e-8093d493377e-getty-1259063441.jpg?w=864&h=658&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4747&fp-y=0.194',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Taakk Men’s Spring 2024',
    link: 'https://wwd.com/runway/mens-spring-2024/paris/taakk-collection/review/',
    content: [
      `Designer Takuya Morikawa offered a collection inspired by nature that was as poetic as it was polished.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/Taakk-mens-spring2024-001.jpg?w=555&h=740&crop=1',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'Casablanca names former Scotch & Soda head as CEO',
    link: 'https://fashionunited.uk/news/business/casablanca-names-former-scotch-soda-head-as-ceo/2023062670175',
    content: [
      `Parisian design house Casablanca has announced the appointment of Frederick Lukoff as its new chief executive officer, a role he will take on alongside the brand’s founder and creative director, Charaf Tajer.`,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/26/screenshot-2-0j1o29n0-2023-06-26.png',
  },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Routes>
        <Route path="/all-news" element={<AllNewsComponent news={news} />} />
      </Routes>
      <Routes>
        <Route path="/news/:id" element={<NewsItemComponent news={news} />} />
      </Routes>
      <Routes>
        <Route path="/events" element={<AllEvents />} />
      </Routes>
      <Routes>
        <Route path="/events/:id" element={<NewsItemComponent news={news} />} />
      </Routes>
      <Routes>
        <Route path="/instagram/:postId" element={<InstagramPostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
