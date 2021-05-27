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
    - title1 : "Remember your favorites places"
      title2 : "Share them with your friends"
      title3 : "Discover new places"
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

##################### Feature ##########################
feature:
  enable : false
  title : "Something You Need To Know"
  feature_item:
    # feature item loop
    - name : "Clean Code"
      icon : "fas fa-code"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      
    # feature item loop
    - name : "Object Oriented"
      icon : "fas fa-object-group"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      
    # feature item loop
    - name : "24h Service"
      icon : "fas fa-user-clock"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      
    # feature item loop
    - name : "Value For Money"
      icon : "fas fa-heart"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      
    # feature item loop
    - name : "Faster Response"
      icon : "fas fa-tachometer-alt"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      
    # feature item loop
    - name : "Cloud Support"
      icon : "fas fa-cloud"
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"


        


  

##################### Call to action #####################
call_to_action:
  enable : true
  title : "Ready to get started?"
  image : "images/cta.svg"
  content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur."
  button:
    enable : true
    label : "Contact Us"
    link : "contact"
---