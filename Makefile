default: index.html

clean:
	rm -f index.html

index.html: index.md index.sh.html
	cmark-gfm --unsafe --smart <$< | esh index.sh.html >$@
