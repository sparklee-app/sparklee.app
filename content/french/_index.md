---


####################### Banner #########################
# banner:
#  title : "Share your favorite spots"
#  image : "images/mascot_sparklee.png"
#  image : "images/main_screen_site_02.png"
#  content : "L'appli de Partage d'adresses Coup de Coeur ♥ "
#  button:
#    enable : true
#    label : "Contact With Us"
#    link : "contact"

################### Screenshot ########################
screenshot:
  enable : true
  title : "Partage tes adresses Coup de Cœur"
  image : "images/main_screen_site.png"


######################### Service1 #####################
service1:
  enable : true
  service_item:
    #### NOT SHOWING THAT ONE ####
    # service item loop
    # - title : "Welcome to Sparklee"
    #  images:
    #  - "images/mascot_sparklee.png"
    #  content : "L'appli de Partage d'adresses Coup de Coeur ♥"
    #  button:
    #    enable : true
    #    label : "Check it out"
    #    link : "#"

    # service item loop
    - title1 : "❤️ Souviens-toi de tes endroits préférés"
      # Ou "Garde une trace" plutôt ? 
      title2 : "👭 Partage-les avec tes ami·e·s"
      title3 : "🌎 Découvre de nouvelles adresses"
      images:
      - "images/pls_screenshots.png"
      # - "images/service-2.png"
      # - "images/service-3.png"
      content1 : "et ceux que tu veux tester"
      content2 : "et les personnes de mêmes centres d'intérêt"
      #and tastes
      content3 : "recommandées par des personnes de confiance"
      #"Recommendations you can trust, from your friends and people with similar tastes"

      button:
        enable : false
        label : "Check it out"
        link : "#"

######################### Service #####################
service:
  enable : true
  service_item:

    # service item loop
    - title : "Tout en un seul endroit"
      images:
      - "images/allinone.png"
      content : "Tu en as marre de te perdre dans tes multiples screenshots, notes et collections IG ?
      Retrouve toutes tes recommandations dans un endroit centralisé pour les avoir toujours sous la main, facilement accessible !"
      #facilement accessible et de manière organisée 

    # service item loop
    - title : "Recommandations de confiance"
      images:
      - "images/trust.png"
      content : "Stop aux recommandations d'inconnus dont tu ne connais même pas les goûts. Suis tes ami.e.s et des personnes de confiance aux intérêts similaires et découvre leurs bonnes adresses !"
    # goûts ? 
    # leurs endroits favoris ? leurs meilleures adresses ? = best spots
    # favorite trusted influencers

    # service item loop
    - title : "Crée tes propres City guides"
      images:
      - "images/cityguide.png"
      content : "Classé par ville dans lesquelles tu as vécu ou par type de nourriture, c'est toi qui choisis ! Le but c'est de partager ces endroits uniques que tu adores ✨ <br> Ajoute tes recommandations rapidement et facilement avec tes propres photos et annotations !"
      #gem = pépites ? Not only type of food bc = restos only?

##################### Feature ##########################
feature:
  enable : false
  title : "Something You Need To Know"
  feature_item:
    # feature item loop
    - name : "All in One Place"
      icon : "fas fa-landmark"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      
    # feature item loop
    - name : "Recommendations you can trust"
      icon : "fas fa-user-clock"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      
    # feature item loop
    - name : "Create your own City guide"
      icon : "fas fa-heart"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      

##################### Call to action #####################
call_to_action:
  enable : true
  title : "Tu veux être au courant quand c'est prêt ?"
  image : "images/mascot_sparklee.png"
  content : "Laisse ton adresse mail et nous te tiendrons informé·e !"
  #No spam, just a letter of love from us to you for your support!"
  button:
    enable : true
    label : "YAAS PLEASE 🙌"
    # NOT USING label HERE, directly in HTML
    link : "contact"
---