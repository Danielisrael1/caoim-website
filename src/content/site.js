/**
 * Local site content for CAOIM.
 *
 * This is the single source of truth until Sanity is connected (see SANITY.md).
 * Anything marked  // TODO  is a placeholder — replace it with real details.
 */

const site = {
  name: 'Christ the Alpha & Omega International Ministries',
  shortName: 'CAOIM',
  campus: 'Maya',
  legalNote: 'Christ the Alpha & Omega International Ministries – Maya',

  tagline:
    'The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor.',
  taglineRef: 'Isaiah 61:1',

  hero: {
    // Big hero headline over the landing video.
    headline: 'The Spirit of God is upon me…',
    // Supporting line under the headline (continues the verse).
    subhead:
      '…because the Lord has anointed me to proclaim good news to the poor.',
  },

  contact: {
    // TODO: replace the placeholder phone numbers and email.
    phone: '+256 700 000 000',
    phoneAlt: '+256 780 000 000',
    email: 'info@caoim.org',
    addressLines: [
      'Maya, along the Kampala–Masaka Road',
      'Wakiso District, Central Region',
      'Uganda',
    ],
    addressNote:
      'About 27 km (17 miles) south‑west of Kampala, just before Stabex Gas Station.',
    mapQuery: 'Maya, Wakiso, Uganda',
  },

  social: {
    facebook: 'https://facebook.com/caoimug',
    instagram: 'https://instagram.com/caoimug',
    youtube: 'https://www.youtube.com/channel/UCbS5Y40CjCU316YugzroIlg',
    tiktok: 'https://tiktok.com/@caoimug',
  },
  youtube: {
    handle: '@caoimug',
    channelId: 'UCbS5Y40CjCU316YugzroIlg',
    channelUrl: 'https://www.youtube.com/channel/UCbS5Y40CjCU316YugzroIlg',
    // Optional: paste a specific video ID to feature one message instead of the
    // channel's latest uploads on the Home page.
    featuredVideoId: '',
  },

  serviceTimes: [
    { name: 'Morning Service', day: 'Sunday', time: '7:00 – 9:00 AM', note: 'In person & online' },
    { name: 'Main Service', day: 'Sunday', time: '9:00 AM – 2:00 PM', note: 'In person & online' },
    { name: 'Deliverance Service', day: 'Wednesday', time: '6:00 – 9:00 PM', note: 'In person' },
  ],

  about: {
    intro:
      'Christ the Alpha & Omega International Ministries (CAOIM) is a Bible‑believing church family in Maya, Wakiso. Our name confesses that Jesus Christ is “the Alpha and the Omega, the First and the Last, the Beginning and the End” (Revelation 22:13) — the One in whom every story begins and ends.',
    story: [
      'Isaiah 61 is our heartbeat. The same Spirit that rested on the Messiah has anointed His Church to preach good news to the poor, to bind up the brokenhearted, and to proclaim freedom for the captives.',
      'So we gather every week to worship God, to grow in His Word, and to serve our community — in person at our home in Maya and online with friends around the world.',
      'God is still giving “a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair” (Isaiah 61:3). Whoever you are, and wherever you have come from, there is a place for you here.',
    ],
    mission:
      'To proclaim good news to the poor, heal the brokenhearted, and set the captives free — making disciples of Jesus in Maya and beyond.',
    vision:
      'To raise oaks of righteousness — a planting of the Lord for the display of His splendour (Isaiah 61:3): restored people who rebuild ruined places and carry hope to their generation.',
  },

  // The six marks of our calling, drawn straight from Isaiah 61.
  values: [
    {
      title: 'Good news to the poor',
      ref: 'Isaiah 61:1',
      body: 'We preach the gospel in both word and practical compassion.',
    },
    {
      title: 'Healing for the brokenhearted',
      ref: 'Isaiah 61:1',
      body: 'We make room for prayer, restoration and wholeness.',
    },
    {
      title: 'Freedom for the captives',
      ref: 'Isaiah 61:1',
      body: 'We contend for deliverance and new life in Christ.',
    },
    {
      title: 'Beauty instead of ashes',
      ref: 'Isaiah 61:3',
      body: 'We celebrate God turning mourning into joy.',
    },
    {
      title: 'Oaks of righteousness',
      ref: 'Isaiah 61:3',
      body: 'We disciple believers toward maturity and strength.',
    },
    {
      title: 'Rebuilding the ruins',
      ref: 'Isaiah 61:4',
      body: 'We serve, build and bless our community and the nations.',
    },
  ],

  // TODO: review this statement against your own doctrine before publishing.
  beliefs: [
    { title: 'The Bible', body: 'The Scriptures are the inspired, infallible Word of God and our final authority for faith and life.' },
    { title: 'One God', body: 'There is one God, eternally existing in three persons: Father, Son and Holy Spirit.' },
    { title: 'Jesus Christ', body: 'Jesus is fully God and fully man. He lived a sinless life, died for our sins, rose bodily, and will return.' },
    { title: 'Salvation', body: 'We are saved by grace through faith in Jesus Christ alone — not by our works.' },
    { title: 'The Holy Spirit', body: 'The Holy Spirit indwells, empowers and gifts every believer for holy living and service.' },
    { title: 'The Church', body: 'The Church is the body of Christ, called to worship, discipleship, fellowship and mission.' },
    { title: 'Baptism & Communion', body: 'We practise water baptism of believers and the Lord’s Supper as commanded by Jesus.' },
    { title: 'The hope of glory', body: 'Jesus Christ will return in power to judge the world and to make all things new.' },
  ],

  // The lead pastors get a large featured card; the rest follow as a grid.
  leadPastors: {
    names: 'Pr. Robert & Justine Tamale',
    role: 'Lead Pastors',
    photo: '/media/lead-pastors.jpg',
    bio: [
      'Pr. Robert Tamale and his wife Justine lead Christ the Alpha & Omega International Ministries, giving oversight to the church’s teaching, vision and pastoral care.',
      'Their heart is to see lives restored through the gospel and a new generation raised as “oaks of righteousness, a planting of the Lord for the display of his splendour” (Isaiah 61:3).',
    ],
  },

  // TODO: confirm the bios below with the leaders themselves.
  leadership: [
    {
      name: 'Pr. Paul Muwanguzi',
      department: 'Overseer',
      bio: 'Provides spiritual covering and oversight to the church and its leaders.',
      photo: '/media/pr-paul.jpg',
    },
    {
      name: 'Elder Anna',
      department: 'Chief Elder',
      bio: 'Serves as chief elder, caring for the church family and upholding sound order.',
      photo: '/media/elder-anna.jpg',
    },
    {
      name: 'Pr. Teo Kisakye',
      department: 'Evangelism Leader',
      bio: 'Leads the church in evangelism and reaching the community with the gospel.',
      photo: '/media/pr-teo.jpg',
    },
    {
      name: 'Pr. Muganzi Amos',
      department: 'Youth Pastor',
      bio: 'Pastors the youth, discipling the next generation to follow Jesus.',
      photo: '/media/pr-amos.jpg',
    },
    {
      name: 'Pr. Ampaire Jackson',
      department: 'Leader of Intercession',
      bio: 'Leads the intercession and prayer ministry of the church.',
      photo: '', // TODO: photo to be provided
    },
  ],

  ministries: [
    {
      slug: 'children',
      name: 'Children',
      audience: 'Nursery – 12 years',
      image: '/media/kids.jpg',
      summary:
        'A safe, joyful and faith‑filled space where children meet Jesus through Bible stories, worship, crafts and games.',
      meets: 'Sundays, during both services',
      details: [
        'Age‑appropriate teaching that helps every child know they are loved by God.',
        'Trained, screened volunteers and a secure check‑in for every family.',
      ],
    },
    {
      slug: 'youth',
      name: 'Youth',
      audience: '13 – 25 years',
      image: '/media/celebration.jpg',
      summary:
        'A generation being discipled to love God boldly — weekly gatherings, mentorship, worship and our annual Youth Conference.',
      meets: 'Sundays + midweek fellowships',
      details: [
        'Real conversations about faith, identity, relationships and calling.',
        'Opportunities to serve, lead and grow in community.',
      ],
    },
    {
      slug: 'men',
      name: 'Men’s Ministry',
      audience: 'Men of every age',
      image: '/media/men.jpg',
      summary:
        'Brotherhood, accountability and service — men growing as husbands, fathers and leaders after God’s own heart.',
      meets: 'Monthly fellowship',
      details: [
        'Bible study, prayer and honest friendship.',
        'Practical service projects for the church and community.',
      ],
    },
    {
      slug: 'women',
      name: 'Women’s Ministry',
      audience: 'Women of every age',
      image: '/media/women.jpg',
      summary:
        'A sisterhood of prayer, the Word and friendship, encouraging women to walk in their God‑given worth and calling.',
      meets: 'Monthly fellowship',
      details: [
        'Encouragement for every season — single, married, mothering, working.',
        'Mentoring that connects generations of women.',
      ],
    },
  ],

  // TODO: keep this list current. Dates are ISO (YYYY-MM-DD).
  events: [
    {
      slug: 'youth-conference',
      title: 'Youth Conference',
      theme: '“None Found Like Them” — Daniel 1:19',
      date: '2026-09-06',
      time: '3:00 PM',
      location: 'CAOIM, Maya (before Stabex petrol station)',
      speakers: 'Host: Pr. Robert Tamale · Guest preacher: Ap. Denis Musoke',
      poster: '/media/poster-youth-conference.jpg',
      featured: true,
      summary:
        'A day set apart for the next generation — worship, the Word, and a fresh encounter with Jesus. Bring a friend.',
    },
    {
      slug: 'sunday-services',
      title: 'Sunday Services',
      date: '2026-09-13',
      time: '7:00 AM & 9:00 AM',
      location: 'CAOIM, Maya + YouTube Live',
      recurring: 'Every Sunday',
      summary:
        'Two gatherings each Sunday — the 7:00 AM Morning Service and the 9:00 AM Main Service. Children’s ministry runs alongside.',
    },
    {
      slug: 'deliverance-service',
      title: 'Deliverance Service',
      date: '2026-09-09',
      time: '6:00 – 9:00 PM',
      location: 'CAOIM, Maya',
      recurring: 'Every Wednesday',
      summary: 'A midweek service of worship, the Word, prayer and ministry for freedom in Christ.',
    },
  ],

  // Weekly programme banners (shown on the Events page).
  programmes: [
    { title: 'Sunday Morning Service', detail: 'Every Sunday · 7:00 – 9:00 AM', poster: '/media/poster-sunday-morning.jpg' },
    { title: 'Sunday Main Service', detail: 'Every Sunday · 9:00 AM – 2:00 PM', poster: '/media/poster-sunday-main.jpg' },
    { title: 'Wednesday Deliverance Service', detail: 'Every Wednesday · 6:00 – 9:00 PM', poster: '/media/poster-wednesday.jpg' },
  ],

  giving: {
    intro:
      'Your generosity funds ministry to the poor, discipleship for every age, and the work of the gospel in Maya and beyond. Thank you for giving.',
    scripture: {
      text: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.',
      ref: '2 Corinthians 9:7',
    },
    accountName: 'Christ the Alpha and Omega International Ministries',
    poster: '/media/poster-give.jpg',
    mobileMoney: [
      {
        provider: 'Airtel Money',
        label: 'Merchant Code',
        code: '4301752',
        steps: [
          'Dial *185#, then Select 5, then Select 10.',
          'Enter merchant code 4301752.',
          'Select Tithe / Offertory / Seed / Others.',
          'Enter the amount, then a reference, then your PIN.',
        ],
      },
      {
        provider: 'MTN MoMo',
        label: 'Merchant Code',
        code: '635500',
        steps: [
          'Dial *165#, then Select 3.',
          'Enter merchant code 635500.',
          'Enter the amount, then your PIN.',
        ],
      },
    ],
    inPerson:
      'You are also welcome to give during any service at the offering, or hand your gift to a leader.',
  },
}

export default site
