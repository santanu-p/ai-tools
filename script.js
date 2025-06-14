const tools = [
          { name: 'ChatGPT', category: 'Writing', desc: 'Conversational AI for writing, coding, and more.', link: 'https://chat.openai.com/', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
          { name: 'Midjourney', category: 'Design', desc: 'Create stunning AI-generated art from text prompts.', link: 'https://www.midjourney.com/', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Midjourney_Logo.png' },
          { name: 'DALL·E', category: 'Image Generation', desc: 'Text to image generation AI by OpenAI.', link: 'https://openai.com/dall-e', logo: 'https://openai.com/content/images/2022/11/dalle-logo.png' },
          { name: 'Jasper', category: 'Writing', desc: 'AI copywriting and content generation.', link: 'https://www.jasper.ai/', logo: 'https://www.jasper.ai/images/favicon.png' },
          { name: 'Copy.ai', category: 'Marketing', desc: 'Automated content writing for marketers.', link: 'https://www.copy.ai/', logo: 'https://assets.copy.ai/assets/icons/favicon.png' },
          { name: 'Synthesia', category: 'Video', desc: 'AI video generation using avatars and voice.', link: 'https://www.synthesia.io/', logo: 'https://www.synthesia.io/static/favicons/favicon-32x32.png' },
          { name: 'Runway ML', category: 'Video', desc: 'AI-powered video editing and content creation.', link: 'https://runwayml.com/', logo: 'https://runwayml.com/favicon-32x32.png' },
          { name: 'Descript', category: 'Audio/Video', desc: 'Edit video and audio by editing text.', link: 'https://www.descript.com/', logo: 'https://www.descript.com/favicon.ico' },
          { name: 'Pictory', category: 'Video', desc: 'Turn text content into videos with AI.', link: 'https://pictory.ai/', logo: 'https://pictory.ai/favicon.ico' },
          { name: 'Durable', category: 'Website Builder', desc: 'AI website builder for small businesses.', link: 'https://durable.co/', logo: 'https://durable.co/favicon.ico' },
          { name: 'Tome', category: 'Presentation', desc: 'Create AI-generated presentations instantly.', link: 'https://tome.app/', logo: 'https://tome.app/favicon.ico' },
          { name: 'Looka', category: 'Design', desc: 'AI-powered logo and brand kit generator.', link: 'https://looka.com/', logo: 'https://looka.com/favicon.ico' },
          { name: 'Replika', category: 'Chatbot', desc: 'AI chatbot for conversation and companionship.', link: 'https://replika.com/', logo: 'https://replika.com/favicon.ico' },
          { name: 'Murf.ai', category: 'Voice', desc: 'AI voice generation for videos and podcasts.', link: 'https://murf.ai/', logo: 'https://murf.ai/favicon.ico' },
          { name: 'Soundraw', category: 'Music', desc: 'Generate royalty-free music with AI.', link: 'https://soundraw.io/', logo: 'https://soundraw.io/favicon.ico' },
          { name: 'Notion AI', category: 'Productivity', desc: 'Write and summarize content in Notion.', link: 'https://www.notion.so/product/ai', logo: 'https://www.notion.so/images/favicon.ico' },
          { name: 'Frase', category: 'SEO', desc: 'AI content optimization and SEO writing tool.', link: 'https://www.frase.io/', logo: 'https://www.frase.io/wp-content/uploads/2022/02/favicon-32x32.png' },
          { name: 'Grammarly', category: 'Writing', desc: 'Grammar checking and style enhancement AI.', link: 'https://www.grammarly.com/', logo: 'https://static.grammarly.com/assets/files/2e7a01c6b1ba12b8aa13c04d02c5d179/favicon.png' },
          { name: 'AI Dungeon', category: 'Game', desc: 'AI-generated text adventure games.', link: 'https://play.aidungeon.io/', logo: 'https://play.aidungeon.io/favicon.ico' },
          { name: 'Surfer SEO', category: 'SEO', desc: 'AI SEO optimization for content ranking.', link: 'https://surferseo.com/', logo: 'https://surferseo.com/favicon.ico' },
          // Add up to 100 tools in this array for full scale.
          { name: 'GitHub Copilot', category: 'Coding, Programming', desc: 'AI pair programmer from GitHub and OpenAI.', link: 'https://github.com/features/copilot', logo: 'https://github.githubassets.com/favicons/favicon.svg' },
          { name: 'Replit Ghostwriter', category: 'Coding, Programming', desc: 'Code completion and suggestions in Replit IDE.', link: 'https://replit.com/ghostwriter', logo: 'https://replit.com/public/favicon.ico' },
          { name: 'Tabnine', category: 'Coding, Autocomplete', desc: 'AI assistant that helps you code faster.', link: 'https://www.tabnine.com/', logo: 'https://www.tabnine.com/favicon.ico' },
          { name: 'Codeium', category: 'Coding, AI Autocomplete', desc: 'AI coding assistant and code completion.', link: 'https://codeium.com/', logo: 'https://codeium.com/favicon.ico' },
        
  { name: 'Claude', category: 'Writing', desc: 'AI conversational model for writing and coding tasks.', link: 'https://www.anthropic.com/', logo: 'https://www.anthropic.com/favicon.ico' },
  { name: 'Perplexity', category: 'Research', desc: 'AI-powered search engine with real-time answers.', link: 'https://www.perplexity.ai/', logo: 'https://www.perplexity.ai/favicon.ico' },
  { name: 'DeepL', category: 'Translation', desc: 'AI translation tool for accurate, natural language translations.', link: 'https://www.deepl.com/', logo: 'https://www.deepl.com/favicon.ico' },
  { name: 'Canva Magic Studio', category: 'Design', desc: 'AI-powered graphic design and content creation.', link: 'https://www.canva.com/', logo: 'https://www.canva.com/favicon.ico' },
  { name: 'Firefly', category: 'Design', desc: 'Adobe’s generative AI for creative design.', link: 'https://www.adobe.com/sensei/generative-ai/firefly.html', logo: 'https://www.adobe.com/favicon.ico' },
  { name: 'Poe', category: 'Chatbot', desc: 'AI chatbot aggregator for custom bot creation.', link: 'https://poe.com/', logo: 'https://poe.com/favicon.ico' },
  { name: 'Otter.ai', category: 'Audio/Video', desc: 'AI-powered transcription for meetings and calls.', link: 'https://otter.ai/', logo: 'https://otter.ai/favicon.ico' },
  { name: 'WellSaid Labs', category: 'Voice', desc: 'AI voice generation for high-quality voiceovers.', link: 'https://wellsaidlabs.com/', logo: 'https://wellsaidlabs.com/favicon.ico' },
  { name: 'Fotor', category: 'Image Editing', desc: 'AI-powered photo editing and design tool.', link: 'https://www.fotor.com/', logo: 'https://www.fotor.com/favicon.ico' },
  { name: 'Pixlr', category: 'Image Editing', desc: 'Web-based AI photo editor with advanced features.', link: 'https://pixlr.com/', logo: 'https://pixlr.com/favicon.ico' },
  { name: 'Lumen5', category: 'Video', desc: 'AI-driven video creation from text content.', link: 'https://lumen5.com/', logo: 'https://lumen5.com/favicon.ico' },
  { name: 'HeyGen', category: 'Video', desc: 'AI video platform for avatar-based content.', link: 'https://www.heygen.com/', logo: 'https://www.heygen.com/favicon.ico' },
  { name: 'Writesonic', category: 'Writing', desc: 'AI tool for content creation and marketing copy.', link: 'https://writesonic.com/', logo: 'https://writesonic.com/favicon.ico' },
  { name: 'Rytr', category: 'Writing', desc: 'AI writing assistant for quick content generation.', link: 'https://rytr.me/', logo: 'https://rytr.me/favicon.ico' },
  { name: 'Cursor', category: 'Coding', desc: 'AI-powered code editor with intelligent suggestions.', link: 'https://cursor.sh/', logo: 'https://cursor.sh/favicon.ico' },
  { name: 'Lovable.dev', category: 'Coding', desc: 'AI-powered app builder with no-code interface.', link: 'https://lovable.dev/', logo: 'https://lovable.dev/favicon.ico' },
  { name: 'V0.dev', category: 'Coding', desc: 'AI-driven UI generator for React components.', link: 'https://v0.dev/', logo: 'https://v0.dev/favicon.ico' },
  { name: 'Bolt.new', category: 'Coding', desc: 'AI-enhanced coding assistant for developers.', link: 'https://bolt.new/', logo: 'https://bolt.new/favicon.ico' },
  { name: 'Ajelix', category: 'Productivity', desc: 'AI Excel add-in for spreadsheet automation.', link: 'https://ajelix.com/', logo: 'https://ajelix.com/favicon.ico' },
  { name: 'Mentimeter', category: 'Presentation', desc: 'AI-driven interactive presentation tool.', link: 'https://www.mentimeter.com/', logo: 'https://www.mentimeter.com/favicon.ico' },
  { name: 'Teal', category: 'Career', desc: 'AI tool for resume building and job tracking.', link: 'https://www.tealhq.com/', logo: 'https://www.tealhq.com/favicon.ico' },
  { name: 'Enhancecv', category: 'Career', desc: 'AI-powered resume optimization tool.', link: 'https://enhancecv.com/', logo: 'https://enhancecv.com/favicon.ico' },
  { name: 'Kickresume', category: 'Career', desc: 'AI resume and cover letter builder.', link: 'https://www.kickresume.com/', logo: 'https://www.kickresume.com/favicon.ico' },
  { name: 'MyPerfectResume', category: 'Career', desc: 'AI-driven resume builder with tailored suggestions.', link: 'https://www.myperfectresume.com/', logo: 'https://www.myperfectresume.com/favicon.ico' },
  { name: 'Smartcat', category: 'Translation', desc: 'AI-powered translation and content generation.', link: 'https://www.smartcat.com/', logo: 'https://www.smartcat.com/favicon.ico' },
  { name: 'Deepgram', category: 'Voice', desc: 'AI platform for speech-to-text and voice synthesis.', link: 'https://deepgram.com/', logo: 'https://deepgram.com/favicon.ico' },
  { name: 'Trint', category: 'Audio/Video', desc: 'AI transcription for multilingual content.', link: 'https://trint.com/', logo: 'https://trint.com/favicon.ico' },
  { name: 'Remini', category: 'Image Editing', desc: 'AI tool for enhancing and restoring photos.', link: 'https://remini.ai/', logo: 'https://remini.ai/favicon.ico' },
  { name: 'Tickeron', category: 'Finance', desc: 'AI-driven trading and investment analytics.', link: 'https://tickeron.com/', logo: 'https://tickeron.com/favicon.ico' },
  { name: 'Browse AI', category: 'Data Scraping', desc: 'AI bot for web data extraction and automation.', link: 'https://www.browse.ai/', logo: 'https://www.browse.ai/favicon.ico' },
  { name: 'Undetectable AI', category: 'Writing', desc: 'Rewrites AI content to sound human-like.', link: 'https://undetectable.ai/', logo: 'https://undetectable.ai/favicon.ico' },
  { name: 'AIVA', category: 'Music', desc: 'AI-powered music composition tool.', link: 'https://www.aiva.ai/', logo: 'https://www.aiva.ai/favicon.ico' },
  { name: 'ClickUp Brain', category: 'Productivity', desc: 'AI-powered task and knowledge management.', link: 'https://clickup.com/', logo: 'https://clickup.com/favicon.ico' },
  { name: 'Microsoft Copilot', category: 'Productivity', desc: 'AI assistant for Microsoft 365 suite.', link: 'https://copilot.microsoft.com/', logo: 'https://copilot.microsoft.com/favicon.ico' },
  { name: 'Google Gemini', category: 'Productivity', desc: 'AI features for Google Workspace.', link: 'https://gemini.google.com/', logo: 'https://gemini.google.com/favicon.ico' },
  { name: 'Woebot', category: 'Health', desc: 'AI chatbot for mental health support.', link: 'https://woebothealth.com/', logo: 'https://woebothealth.com/favicon.ico' },
  { name: 'FitnessAI', category: 'Health', desc: 'AI-generated personalized workout plans.', link: 'https://www.fitnessai.com/', logo: 'https://www.fitnessai.com/favicon.ico' },
  { name: 'Calm', category: 'Health', desc: 'AI-driven meditation and sleep app.', link: 'https://www.calm.com/', logo: 'https://www.calm.com/favicon.ico' },
  { name: 'Bullhorn Copilot', category: 'HR', desc: 'AI-powered applicant tracking system.', link: 'https://www.bullhorn.com/', logo: 'https://www.bullhorn.com/favicon.ico' },
  { name: 'Close CRM', category: 'Sales', desc: 'AI-powered CRM for sales automation.', link: 'https://close.com/', logo: 'https://close.com/favicon.ico' },
  { name: 'Vorto', category: 'Logistics', desc: 'AI-driven supply chain management.', link: 'https://vorto.ai/', logo: 'https://vorto.ai/favicon.ico' },
  { name: 'Motive', category: 'Logistics', desc: 'AI platform for fleet management.', link: 'https://gomotive.com/', logo: 'https://gomotive.com/favicon.ico' },
  { name: 'MacPaw CleanMyPhone', category: 'Productivity', desc: 'AI-powered photo organization for iOS.', link: 'https://macpaw.com/cleanmyphone', logo: 'https://macpaw.com/favicon.ico' },
  { name: 'Zapier Chatbots', category: 'Automation', desc: 'AI chatbots with no-code automation.', link: 'https://zapier.com/apps/chatbots', logo: 'https://zapier.com/favicon.ico' },
  { name: 'Personal AI', category: 'Messaging', desc: 'AI-generated messaging based on user data.', link: 'https://www.personal.ai/', logo: 'https://www.personal.ai/favicon.ico' },
  { name: 'Mem', category: 'Productivity', desc: 'AI-powered note-taking and knowledge management.', link: 'https://mem.ai/', logo: 'https://mem.ai/favicon.ico' },
  { name: 'DeepSeek R1', category: 'Research', desc: 'AI model for advanced research tasks.', link: 'https://www.deepseek.com/', logo: 'https://www.deepseek.com/favicon.ico' },
  { name: 'Stability AI', category: 'Image Generation', desc: 'AI for generating high-quality images.', link: 'https://stability.ai/', logo: 'https://stability.ai/favicon.ico' },
  { name: 'Flux', category: 'Image Generation', desc: 'AI tool for text-to-image creation.', link: 'https://www.flux.ai/', logo: 'https://www.flux.ai/favicon.ico' },
  { name: 'Adcreative AI', category: 'Marketing', desc: 'AI for generating ad creatives.', link: 'https://www.adcreative.ai/', logo: 'https://www.adcreative.ai/favicon.ico' },
  { name: 'Otio', category: 'Writing', desc: 'AI tool for research and writing assistance.', link: 'https://otio.ai/', logo: 'https://otio.ai/favicon.ico' },

  {name: 'Grok', category: 'Conversational AI', desc: 'AI assistant for answering questions and task assistance, built by xAI.', link: 'https://www.grok.com/', logo: 'https://www.grok.com/favicon.ico'},
  {name:'HuggingFace', category:'Machine Learning', desc:'Platform for building and deploying AI models with open-source tools.', link:'https://huggingface.co/', logo:'https://huggingface.co/favicon.ico'},
  {name:'ElevenLabs', category:'Voice', desc:'AI-powered text-to-speech with realistic voice synthesis.', link:'https://elevenlabs.io/', logo:'https://elevenlabs.io/favicon.ico'},
  {name:'QuillBot', category:'Writing', desc:'AI paraphrasing and writing enhancement tool for better content.', link:'https://quillbot.com/', logo:'https://quillbot.com/favicon.ico'},
  {name:'Craiyon', category:'Image Generation', desc:'Free AI tool for generating images from text prompts.', link:'https://www.craiyon.com/', logo:'https://www.craiyon.com/favicon.ico'},
  {name:'ZapierAIActions', category:'Automation', desc:'AI-powered automation for connecting apps and workflows.', link:'https://zapier.com/ai', logo:'https://zapier.com/favicon.ico'},
  {name: 'Anyword', category: 'Marketing', desc: 'AI copywriting tool optimized for marketing and ad campaigns.', link: 'https://anyword.com/', logo: 'https://anyword.com/favicon.ico'},
  {name: 'Beautiful.ai', category: 'Presentation', desc: 'AI-driven presentation design for professional slides.', link: 'https://www.beautiful.ai/', logo: 'https://www.beautiful.ai/favicon.ico'},
  {name: 'Mubert', category: 'Music', desc: 'AI-generated music for creators and developers.', link: 'https://mubert.com/', logo: 'https://mubert.com/favicon.ico'},
  {name: 'Elicit', category: 'Research', desc: 'AI research assistant for literature reviews and data analysis.', link: 'https://elicit.org/', logo: 'https://elicit.org/favicon.ico'},
  // Add more tools as needed, up to 100 total

  { name: 'Bard', 
  category: 'Conversational AI', 
  desc: 'Google AI language model for text generation and analysis.', 
  link: 'https://bard.google.com/', 
  logo: 'https://bard.google.com/favicon.ico' 
},
{ name: 'Whisper', 
  category: 'Speech Recognition', 
  desc: 'OpenAI speech recognition system for accurate transcription.', 
  link: 'https://openai.com/research/whisper', 
  logo: 'https://openai.com/favicon.ico' 
},
{ name: 'Amazon CodeWhisperer', 
  category: 'Coding', 
  desc: 'AI coding companion that provides real-time suggestions.', 
  link: 'https://aws.amazon.com/codewhisperer/', 
  logo: 'https://aws.amazon.com/favicon.ico' 
},
{ name: 'Anthropic Claude 3', 
  category: 'Conversational AI', 
  desc: 'Advanced AI model with enhanced reasoning and accuracy.', 
  link: 'https://www.anthropic.com/claude', 
  logo: 'https://www.anthropic.com/favicon.ico' 
},
{ name: 'AssemblyAI', 
  category: 'Speech Recognition', 
  desc: 'AI APIs for speech recognition and audio intelligence.', 
  link: 'https://www.assemblyai.com/', 
  logo: 'https://www.assemblyai.com/favicon.ico' 
},
{ name: 'Runway Gen-2', 
  category: 'Video Generation', 
  desc: 'AI system for generating and editing videos from text.', 
  link: 'https://runwayml.com/gen-2', 
  logo: 'https://runwayml.com/favicon.ico' 
},
{ name: 'Adobe Sensei', 
  category: 'Creative Suite', 
  desc: 'AI features across Adobe creative applications.', 
  link: 'https://www.adobe.com/sensei.html', 
  logo: 'https://www.adobe.com/favicon.ico' 
},
{ name: 'Sourcegraph Cody', 
  category: 'Coding', 
  desc: 'AI code assistant for searching and understanding codebases.', 
  link: 'https://about.sourcegraph.com/cody', 
  logo: 'https://sourcegraph.com/favicon.ico' 
},
{ name: 'Mistral AI', 
  category: 'Language Models', 
  desc: 'Open-source large language models with commercial applications.', 
  link: 'https://mistral.ai/', 
  logo: 'https://mistral.ai/favicon.ico' 
},
{ name: 'LangChain', 
  category: 'Development', 
  desc: 'Framework for developing applications with LLMs.', 
  link: 'https://langchain.com/', 
  logo: 'https://langchain.com/favicon.ico' 
},
{ name: 'Mixtral', 
  category: 'Language Models', 
  desc: 'Advanced mixture-of-experts language model by Mistral AI.', 
  link: 'https://mistral.ai/news/mixtral-of-experts/', 
  logo: 'https://mistral.ai/favicon.ico' 
},
{ name: 'Typeface', 
  category: 'Marketing', 
  desc: 'AI platform for brand-consistent content creation.', 
  link: 'https://www.typeface.ai/', 
  logo: 'https://www.typeface.ai/favicon.ico' 
},
{ name: 'Lindy', 
  category: 'Writing', 
  desc: 'AI writing assistant for long-form content and books.', 
  link: 'https://www.lindy.ai/', 
  logo: 'https://www.lindy.ai/favicon.ico' 
},
{ name: 'Inferkit', 
  category: 'Writing', 
  desc: 'AI text generation tool for creative writing.', 
  link: 'https://inferkit.com/', 
  logo: 'https://inferkit.com/favicon.ico' 
},
{ name: 'Movio', 
  category: 'Video', 
  desc: 'AI spokesperson video creator from text.', 
  link: 'https://www.movio.la/', 
  logo: 'https://www.movio.la/favicon.ico' 
},
{ name: 'Scenario', 
  category: 'Game Development', 
  desc: 'AI-powered game asset generation platform.', 
  link: 'https://www.scenario.com/', 
  logo: 'https://www.scenario.com/favicon.ico' 
},
{ name: 'Krisp', 
  category: 'Audio', 
  desc: 'AI-powered noise cancellation for calls.', 
  link: 'https://krisp.ai/', 
  logo: 'https://krisp.ai/favicon.ico' 
},
{ name: 'Seamless M4T', 
  category: 'Translation', 
  desc: 'Meta AI model for multilingual translation and transcription.', 
  link: 'https://ai.meta.com/resources/models-and-libraries/seamless-communication/', 
  logo: 'https://ai.meta.com/favicon.ico' 
},
{ name: 'Duet AI', 
  category: 'Productivity', 
  desc: 'Google Cloud AI assistant for developers and workspace.', 
  link: 'https://cloud.google.com/duet-ai', 
  logo: 'https://cloud.google.com/favicon.ico' 
},
{ name: 'Inflection-2', 
  category: 'Language Models', 
  desc: 'Advanced language model by Inflection AI.', 
  link: 'https://inflection.ai/', 
  logo: 'https://inflection.ai/favicon.ico' 
},
{
  name: 'Leonardo AI',
  category: 'Image Generation',
  desc: 'Create production-quality visual assets with AI for games, art, and design.',
  link: 'https://leonardo.ai/',
  logo: 'https://leonardo.ai/favicon.ico'
},
{
  name: 'You.com',
  category: 'Search',
  desc: 'AI-powered search engine and chatbot with integrated apps and summarization.',
  link: 'https://you.com/',
  logo: 'https://you.com/favicon.ico'
},
{
  name: 'Phind',
  category: 'Coding Assistant',
  desc: 'AI search engine for developers to get instant coding answers and context.',
  link: 'https://phind.com/',
  logo: 'https://phind.com/favicon.ico'
},
{
  name: 'Supernormal',
  category: 'Productivity',
  desc: 'AI-powered meeting notes, summaries, and action items for teams.',
  link: 'https://supernormal.com/',
  logo: 'https://supernormal.com/favicon.ico'
},
{
  name: 'Harpa AI',
  category: 'Automation',
  desc: 'AI Chrome extension for web automation, scraping, and chat with any site.',
  link: 'https://harpa.ai/',
  logo: 'https://harpa.ai/favicon.ico'
},
{
  name: 'ChatPDF',
  category: 'Document Analysis',
  desc: 'AI that allows you to chat with PDFs and receive answers from documents.',
  link: 'https://www.chatpdf.com/',
  logo: 'https://www.chatpdf.com/favicon.ico'
},
{
  name: 'Genmo',
  category: 'Video',
  desc: 'Create videos from text with generative AI animation and storytelling.',
  link: 'https://genmo.ai/',
  logo: 'https://genmo.ai/favicon.ico'
},
{
  name: 'Gamma',
  category: 'Presentation',
  desc: 'AI-powered platform for creating engaging presentations and docs.',
  link: 'https://gamma.app/',
  logo: 'https://gamma.app/favicon.ico'
},
{
  name: 'Papercup',
  category: 'Voice/Video',
  desc: 'AI for dubbing and translating videos with synthetic voices.',
  link: 'https://www.papercup.com/',
  logo: 'https://www.papercup.com/favicon.ico'
},
{
  name: 'Socratic',
  category: 'Education',
  desc: 'Google\'s AI learning app that helps students answer homework questions.',
  link: 'https://socratic.org/',
  logo: 'https://socratic.org/favicon.ico'
},
{
  name: 'Adept',
  category: 'Productivity',
  desc: 'AI agents that automate tasks on your computer and across web apps.',
  link: 'https://www.adept.ai/',
  logo: 'https://www.adept.ai/favicon.ico'
},
{
  name: 'Deep Nostalgia',
  category: 'Image Editing',
  desc: 'AI tool to animate old photos and bring portraits to life.',
  link: 'https://www.myheritage.com/deep-nostalgia',
  logo: 'https://www.myheritage.com/favicon.ico'
}
];


    function renderAllTools() {
      const allGrid = document.getElementById('allToolsGrid');
      allGrid.innerHTML = '';
      tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-xl transition';
        card.innerHTML = `
          <img src="${tool.logo}" alt="${tool.name} Logo" class="w-12 h-12 mb-3 mx-auto">
          <h2 class="text-lg font-semibold text-gray-900 text-center">${tool.name}</h2>
          <p class="mt-2 text-gray-600 text-sm flex-grow">${tool.desc}</p>
          <a href="${tool.link}" target="_blank" class="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium text-center">
            Visit Site →
          </a>
        `;
        allGrid.appendChild(card);
      });
    }

    function filterTools() {
      const searchValue = document.getElementById('searchBar').value.trim().toLowerCase();
      const resultsSection = document.getElementById('searchResultsSection');
      const resultsGrid = document.getElementById('searchResultsGrid');
      const noResultsMessage = document.getElementById('noResultsMessage');

      // If search box is empty, hide results section
      if (searchValue === '') {
        resultsGrid.innerHTML = '';
        noResultsMessage.classList.add('hidden');
        resultsSection.classList.add('hidden');
        return;
      }

      // Otherwise, show results section and filter
      resultsSection.classList.remove('hidden');
      const matching = tools.filter(tool => {
        return (
          tool.name.toLowerCase().includes(searchValue) ||
          tool.category.toLowerCase().includes(searchValue) ||
          tool.desc.toLowerCase().includes(searchValue)
        );
      });

      // Clear previous results
      resultsGrid.innerHTML = '';

      if (matching.length === 0) {
        // No matches found
        noResultsMessage.classList.remove('hidden');
      } else {
        noResultsMessage.classList.add('hidden');
        // Render each matching card
        matching.forEach(tool => {
          const card = document.createElement('div');
          card.className = 'bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-xl transition';
          card.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name} Logo" class="w-12 h-12 mb-3 mx-auto">
            <h2 class="text-lg font-semibold text-gray-900 text-center">${tool.name}</h2>
            <p class="mt-2 text-gray-600 text-sm flex-grow">${tool.desc}</p>
            <a href="${tool.link}" target="_blank" class="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium text-center">
              Visit Site →
            </a>
          `;
          resultsGrid.appendChild(card);
        });
      }
    }

    // On page load, render all tools
    window.addEventListener('DOMContentLoaded', renderAllTools);