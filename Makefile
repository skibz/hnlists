
hnlists.zip: hnlists.min.js *.png manifest.json
	zip $@ $^

hnlists.min.js: *.js
	npx uglifyjs --compress --mangle < $^ > $@

.PHONY: clean
clean:
	-rm -f *.zip *.min.js