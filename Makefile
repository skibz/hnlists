
build:
	zip hnlists.zip manifest.json *.js *.png

clean:
	rm -f *.zip

.PHONY: clean build