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
  title : "Share your favorite spots"
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
    - title1 : "❤️ Remember your favorites places"
      title2 : "👭 Share them with your friends"
      title3 : "🌎 Discover new places"
      images:
      - "images/pls_screenshots.png"
      # - "images/service-2.png"
      # - "images/service-3.png"
      content1 : "and the ones you want to try"
      content2 : "and People with similar interests"
      #and tastes
      content3 : "recommended by People you trust"
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
    - title : "All in One Place"
      images:
      - "images/allinone.png"
      content : "Tired of getting lost in your screenshots, notes and IG collections? Have all your Places recommendations in one centralised place and access it whenever, wherever!"

    # service item loop
    - title : "Recommendations you can trust"
      images:
      - "images/trust.png"
      content : "Stop reading recommendations from strangers when you don't even know their tastes. Follow your Friends and People like you to discover their best spots!"
    # favorite trusted influencers

    # service item loop
    - title : "Create your own City guides"
      images:
      - "images/cityguide.png"
      content : "Organised by city you lived in or type of food, you choose! It's about sharing those unique gems that you love ✨ <br> Easily and quickly add your recommendations with your own pictures and notes!"


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
  title : "Want to be notified when it's ready?"
  image : "images/mascot_sparklee.png"
  content : "Leave your email and we'll let you know!"
  #No spam, just a letter of love from us to you for your support!"
  button:
    enable : true
    label : "YAAS PLEASE 🙌"
    # NOT USING label HERE, directly in HTML
    link : "contact"
---