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
    youtube: 'https://youtube.com/@caoimug',
    tiktok: 'https://tiktok.com/@caoimug',
  },
  youtube: {
    handle: '@caoimug',
    channelUrl: 'https://youtube.com/@caoimug',
    // TODO: paste a video/live ID to embed a featured message on the Home page.
    featuredVideoId: '',
  },

  // TODO: confirm real service days and times.
  serviceTimes: [
    { name: 'First Service', day: 'Sunday', time: '8:00 AM', note: 'In person & online' },
    { name: 'Second Service', day: 'Sunday', time: '10:30 AM', note: 'In person & online' },
    { name: 'Midweek Service', day: 'Wednesday', time: '5:30 PM', note: 'In person' },
    { name: 'Prayer Meeting', day: 'Friday', time: '6:00 PM', note: 'In person' },
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

  // TODO: replace "Name coming soon" with real names, add bios and photos
  // (drop images into public/media and set `photo`, e.g. '/media/jane-doe.jpg').
  leadership: [
    { name: 'Name coming soon', department: 'Associate Pastor', bio: 'Short bio coming soon.', photo: '' },
    { name: 'Name coming soon', department: 'Worship & Music', bio: 'Short bio coming soon.', photo: '' },
    { name: 'Name coming soon', department: 'Youth Ministry', bio: 'Short bio coming soon.', photo: '' },
    { name: 'Name coming soon', department: 'Children’s Ministry', bio: 'Short bio coming soon.', photo: '' },
    { name: 'Name coming soon', department: 'Church Administration', bio: 'Short bio coming soon.', photo: '' },
    { name: 'Name coming soon', department: 'Missions & Outreach', bio: 'Short bio coming soon.', photo: '' },
  ],

  ministries: [
    {
      slug: 'children',
      name: 'Children',
      audience: 'Nursery – 12 years',
      image: '/media/welcome.jpg',
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
      image: '/media/youth-choir.jpg',
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
      image: '/media/choir-red.jpg',
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
      image: '/media/worship-team.jpg',
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
      date: '2026-09-06',
      time: '9:00 AM – 4:00 PM',
      location: 'CAOIM, Maya',
      featured: true,
      summary:
        'A day set apart for the next generation — worship, the Word, and a fresh encounter with Jesus. Bring a friend.',
    },
    {
      slug: 'sunday-services',
      title: 'Sunday Services',
      date: '2026-09-13',
      time: '8:00 AM & 10:30 AM',
      location: 'CAOIM, Maya + YouTube Live',
      recurring: 'Every Sunday',
      summary: 'Gather with the whole church family for worship and teaching. Children’s ministry runs in both services.',
    },
    {
      slug: 'midweek-prayer',
      title: 'Midweek Prayer',
      date: '2026-09-11',
      time: '6:00 PM',
      location: 'CAOIM, Maya',
      recurring: 'Every Friday',
      summary: 'We come together to seek the Lord for our church, our community and the nations.',
    },
    {
      slug: 'water-baptism',
      title: 'Water Baptism Sunday',
      date: '2026-09-27',
      time: 'During the second service',
      location: 'CAOIM, Maya',
      summary: 'Have you given your life to Jesus? Take your next step in obedience and be baptised. Speak to a pastor to register.',
    },
  ],

  giving: {
    intro:
      'Your generosity funds ministry to the poor, discipleship for every age, and the work of the gospel in Maya and beyond. Thank you for giving.',
    scripture: {
      text: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.',
      ref: '2 Corinthians 9:7',
    },
    // TODO: replace the placeholder merchant codes with your real ones.
    mobileMoney: [
      {
        provider: 'Airtel Money',
        label: 'Merchant Code',
        code: '000000',
        steps: [
          'Dial *185# and choose “Pay Bill / Merchant Payment”.',
          'Enter merchant code 000000.',
          'Enter the amount, then your PIN.',
          'Use your name as the reference and confirm.',
        ],
      },
      {
        provider: 'MTN MoMo',
        label: 'Merchant Code',
        code: '000000',
        steps: [
          'Dial *165# and choose “Pay Bill”.',
          'Enter merchant code 000000.',
          'Enter the amount, then your PIN.',
          'Use your name as the reference and confirm.',
        ],
      },
    ],
    // TODO: add real bank details or remove this block.
    bank: {
      bankName: 'Bank name coming soon',
      accountName: 'Christ the Alpha & Omega International Ministries',
      accountNumber: '0000000000',
      branch: 'Branch coming soon',
      swift: '',
    },
    inPerson:
      'You are also welcome to give during any service at the offering, or hand your gift to a leader.',
  },
}

export default site
