
lookup.hnlists-firefox.zip := 2
lookup.hnlists-chrome.zip := 3

hnlists.zip: hnlists.min.js *.png
	MANIFEST=$$(jq -c -M '. += {"manifest_version": $(lookup.$@)}' < manifest.template.json) && \
	echo $$MANIFEST > manifest.json && \
	zip $@ $^ manifest.json

hnlists.min.js: hnlists.js
	npx uglifyjs --compress --mangle < $^ > $@

.PHONY: clean
clean:
	-rm -rf *.zip *.min.js manifest.json hnlists-firefox hnlists-chrome