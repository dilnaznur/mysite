import { useState, useEffect } from 'react'
import FlowerDecor from '../components/FlowerDecor'

export default function Gift3() {
  const fullText = `2008 жыл. Менің дүниеге келген жылым. Көзімді аша сала көргенім ата-анам, ағам және жаңа "апа" рөлін түсіне алмай жүрген 5 жасар қыз. Үйге әкелген кім екенін түсінбей, саусағымды тістеп те, мұрнымды да шұқып көрген едің. Ол кезде біз есейгенде қалай болатынымызды білмесек те, тағдыр бізді ажырамас бауыр етіп жаратты. Сол саусағымды тістеген кішкентай қыз бүгін ақыл тоқтатқан, сұлу да сымбатты 23 жасар бойжеткенге айналды.

Жылдар өте келе, біздің арамызда тек естеліктер ғана емес, музыка да ерекше орын ала бастады.

2016 жыл. Meghan Trainor-дың Me Too әні әр жерден естіліп тұрған кез. Сен маған ерінбей оның сөздерін үйретіп, бірге айтқызатынсың. Сол ән менің ағылшынша айтқан ең алғашқы әнім ғана емес, біздің ең алғашқы "ортақ" әніміз болып қалды. Қазір оны естісем, бірден сенің қасымда отырғаның есіме түседі.

2021 жыл. Сен оқуға Будапештке кетпей тұрып The Weeknd-тің Ariana Grande-мен бірге орындайтын Save your tears әнін жиі тыңдайтынсың. Маған ол өлең если честно с перва не нравился, тым сентиментальный болып көрінетін. Бірақ сен кеткеннен кейін үйдегі тыныштық өзгеше сезілді. Сол кезде баяғы мен "сентиментальный" деп ұнатпаған Save your tears-ті өзім қосатын болдым. Сені сағынғанда осы әнді қайта-қайта тыңдап, плейлистіме қалай қосылып кеткенің де байқамадым.

2024 жыл. Сен жазда келіп, Ed Sheeran-нің концертінен кейін Photograph әнін үйде жиі қосатынсың. Сен қайтадан Будапештке кеткеннен кейін де, сол ән үйде әлі де шырқалып тұратын. История повторяется дейм ба? ахаха Мүмкін, бұл жай ғана әндер емес шығар.

Мүмкін, бұл — біздің әр кезеңіміздің бір-біріне қалдырған іздері шығар. Қай әнді тыңдасам да, оның ішінде сен барсың.

Туған күніңмен, тәте. Әрқашан жанымда бола бер 🤍`

  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [petals, setPetals] = useState([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) {
        clearInterval(interval)
        setDone(true)
        generatePetals()
      }
    }, 28)
    return () => clearInterval(interval)
  }, [])

  const generatePetals = () => {
    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2
    }))
    setPetals(newPetals)
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            animation: `floatPetal ${petal.duration}s ease-in ${petal.delay}s infinite`
          }}
        />
      ))}

      <div className="screen" style={{ position: 'relative', zIndex: 1 }}>
        <div className="letter-card">
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 10
          }}>
            <FlowerDecor size={35} />
          </div>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10
          }}>
            <FlowerDecor size={35} />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            zIndex: 10
          }}>
            <FlowerDecor size={35} />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            zIndex: 10
          }}>
            <FlowerDecor size={35} />
          </div>

          <h2 className="letter-title">Менің хатым 🤍</h2>

          <div className="letter-text">
            {displayed}
            {!done && <span className="typewriter-cursor">|</span>}
          </div>
        </div>

        {done && (
          <div className="celebration-text">
            🌸 Туған күніңмен, Гаухар! 🌸
          </div>
        )}
      </div>
    </div>
  )
}
