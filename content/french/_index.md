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


######################### Service #####################
service:
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