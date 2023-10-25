from flask import Flask
import modelrunner as mod
app = Flask(__name__)

#api route

@app.route("/<artist>")
def artists(artist):
    print("Generation Started")
    # call main function inside this
    if artist=="taylorswift":
        lyrics=mod.taylor_caller()
    elif artist=="edsheeran":
        print("hihiiiiiiii")
        lyrics=mod.ed_caller()
    elif artist == "eminem":
        lyrics = mod.eminem_caller()
    elif artist == "1975":
        lyrics = mod.a1975_caller()
    elif artist == "sonunigam":
        lyrics = mod.sonu_caller()
    elif artist == "shreyaghosal":
        lyrics = mod.shreya_caller()
    elif artist == "kishorekumar":
        lyrics = mod.kishore_caller()
    elif artist == "arianagrande":
        lyrics = mod.ariana_caller()
    elif artist == "beyonce":
        lyrics = mod.beyonce_caller()
    elif artist == "drake":
        lyrics = mod.drake_caller()
    elif artist == "arjitsingh":
        lyrics = mod.arijit_caller()
    elif artist == "badshah":
        lyrics = mod.badshah_caller()
    elif artist == "elton":
        lyrics = mod.elton_caller()
    elif artist == "elvis":
        lyrics = mod.elvis_caller()
    elif artist == "kk":
        lyrics = mod.kk_caller()
    elif artist == "lata":
        lyrics = mod.lata_caller()
    elif artist == "gulzar":
        lyrics = mod.gulzar_caller()
    elif artist == "imaginedragons":
        lyrics = mod.dragon_caller()
    elif artist == "jlo":
        lyrics = mod.jennifer_caller()
    elif artist == "michael":
        lyrics = mod.michael_caller()
    elif artist == "oned":
        lyrics = mod.oned_caller()
    elif artist == "test":
        lyrics = "Select a artist to generate lyrics"

    else:
        lyrics=''

    # done_lyr=lyrics.replace('\n',"${<br/>}")
    # done_lyr= mod.englishifier(lyrics)
    done_lyr= lyrics
    print("the output was generated")
    return {"lyric" : f"{done_lyr}"}


if __name__ ==  "__main__":
    app.run(host='0.0.0.0', port=8080)