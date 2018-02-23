
build:
	zip hnlists.zip manifest.json *.js *.png

clean:
	rm *.zip

.PHONY: clean build